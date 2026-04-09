import { C, F } from "@/constants/theme";
import { useEffect, useRef, useState } from "react";
import { Alert, Animated, StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import api from '../../app/api'
import { Picker } from '@react-native-picker/picker'
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "expo-router";

type FloatingLabelInputProps = TextInputProps & {
    label: string;
};


const FloatingLabelInput = ({ label, value, onChangeText, ...props }: FloatingLabelInputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    const animatedLabel = useRef(new Animated.Value(value === '' ? 0 : 1)).current;

    const handleFocus = () => {
        setIsFocused(true);
        Animated.timing(animatedLabel, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = () => {
        setIsFocused(false);
        if (value === '') {
            Animated.timing(animatedLabel, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start();
        }
    };

    const labelStyle = {
        position: 'absolute' as const,
        left: 10,
        top: animatedLabel.interpolate({
            inputRange: [0, 1],
            outputRange: [12, -12]
        }),
        fontSize: animatedLabel.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 12],
        }),
        color: animatedLabel.interpolate({
            inputRange: [0, 1],
            outputRange: ['#aaa', C.primario],
        }),
        backgroundColor: C.background,
        paddingHorizontal: 4,
        zIndex: 1,
    };

    return (
        <View style={styles.inputContainer}>
            <Animated.Text style={labelStyle} pointerEvents="none">
                {label}
            </Animated.Text>
            <TextInput
                {...props}
                style={styles.inputs}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
};


interface categoria {
    id: number,
    nome: string
}


export default function CriarAnuncio() {

    const [categorias, setCategorias] = useState<categoria[]>([]);

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [quantidadeDisponivel, setQuantidadeDisponivel] = useState('');
    const [unidadeMedida, setUnidadeMedida] = useState('')
    const [precoUnitario, setPrecoUnitario] = useState('')
    const [idCategoria, setIdCategoria] = useState('')

    const navigation = useNavigation<any>()

    async function publicarAnuncio() {

        const token = await SecureStore.getItemAsync('token');

        try {
            const formData = new FormData();
            formData.append('titulo', titulo);
            formData.append('descricao', descricao);
            formData.append('quantidadeDisponivel', quantidadeDisponivel);
            formData.append('unidadeMedida', unidadeMedida);
            formData.append('precoUnitario', precoUnitario);
            formData.append("idCategoria", idCategoria);

            await api.post('/anuncio', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            })
            Alert.alert("Sucesso", "Anúncio publicado com sucesso!", [
                { text: "OK", onPress: () => navigation.navigate('Home') }
            ]);
        } catch (error) {
            console.log(error)
        }
    }

    async function buscaCategorias() {
        try {
            const response = await api.get('/categoria');
            setCategorias(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        buscaCategorias();
    }, [])



    return (
        <View style={styles.container}>
            <FloatingLabelInput label="Título do anúncio" value={titulo} onChangeText={(v) => setTitulo(v)} />
            <FloatingLabelInput label="Descrição :" value={descricao} onChangeText={(v) => setDescricao(v)} />

            <View style={styles.inputPickerContainer}>
                <Picker
                    placeholder="Categoria:"
                    selectedValue={idCategoria}
                    onValueChange={(item) => setIdCategoria(item)}

                >
                    <Picker.Item style={styles.inputPicker} label="Selecione uma categoria" />
                    {categorias.map((categoria) => (

                        <Picker.Item style={styles.inputPicker}
                            label={categoria.nome}
                            key={categoria.id}
                            value={categoria.id}
                        />
                    )
                    )}
                </Picker>
            </View>
            <FloatingLabelInput label="Quantidade total disponível" keyboardType="numeric" value={quantidadeDisponivel} onChangeText={(v) => setQuantidadeDisponivel(v)} />
            <FloatingLabelInput label="Unidade de medida" value={unidadeMedida} onChangeText={(v) => setUnidadeMedida(v)} />
            <FloatingLabelInput label="Preço unitário" keyboardType="numeric" value={precoUnitario} onChangeText={(v) => setPrecoUnitario(v)} />



            <TouchableOpacity
                style={styles.botao}
                onPress={() => publicarAnuncio()}
            >
                <Text style={styles.textoBotao}>Publicar Anúncio</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: C.background,
        justifyContent: "center",
        alignItems: "center",
        gap: 25
    },
    inputContainer: {
        width: "75%",
        position: 'relative',
    },
    inputs: {
        fontSize: F.textoMedio,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: C.bordas,
        color: C.textoPrimario,
        width: "100%",
    },
    botao: {
        backgroundColor: C.primario,
        padding: 18,
        borderRadius: 24,
        marginTop: 20
    },
    textoBotao: {
        color: "#FFF",
        fontSize: F.textoGrande,
        fontWeight: 'bold'
    },
    picker: {
        width: "100%"
    },
    inputPicker: {
        fontSize: F.textoMedio,
        borderRadius: 8,
        color: C.textoPrimario,
        width: "100%",
        backgroundColor: C.background,
        borderWidth: 2,
        borderColor: "red"
    },
    labelPicker: {
        backgroundColor: C.background,
        color: C.text,
        fontSize: F.textoGrande,
    },
    inputPickerContainer: {
        width: "75%",
        borderWidth: 1,
        borderColor: C.bordas,
        borderRadius: 8
    },

});
import { C, F } from "@/constants/theme";
import { useRef, useState } from "react";
import { Animated, StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

type FloatingLabelInputProps = TextInputProps & {
    label: string;
};

const FloatingLabelInput = ({ label, ...props }: FloatingLabelInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    
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
                onChangeText={(text) => setValue(text)}
                value={value}
            />
        </View>
    );
};

export default function CriarAnuncio() {
    return (
        <View style={styles.container}>
            <FloatingLabelInput label="Nome Do Produto" />
            <FloatingLabelInput label="Categoria" />
            <FloatingLabelInput label="Quantidade total disponível" keyboardType="numeric" />
            <FloatingLabelInput label="Unidade" />
            <FloatingLabelInput label="Preço por unidade" keyboardType="numeric" />

            <TouchableOpacity style={styles.botao}>
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
    }
});
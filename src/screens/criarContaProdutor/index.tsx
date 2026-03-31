import { Text } from "@react-navigation/elements";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Switch, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "@/constants/theme";


export default function CriarContaProdutor() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    const navigation = useNavigation<any>();

    const funcCriarConta = () => {
        if (senha.length < 8) {
            Alert.alert("Senha muito curta");
            return 
        }

        if (senha !== confirmaSenha) {
            Alert.alert("Senhas não conferem");
            return
        }

        if (!email && !nome) {
            Alert.alert("Nome e e-mail são obrigatórios");
            return
        }

        navigation.navigate('Home')
    }

    return (
        <View style={styles.main}>
            <Text style={styles.text}>Cadastro de Produtor</Text>
            <View style={styles.inputsContent}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor={"#F0F0F0"}
                    value={nome}
                    onChangeText={text => setNome(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor={"#F0F0F0"}
                    value={email}
                    onChangeText={email => setEmail(email)}
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor={"#F0F0F0"}
                    value={senha}
                    onChangeText={senha => setSenha(senha)}
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Confirme sua senha"
                    placeholderTextColor={"#F0F0F0"}
                    value={confirmaSenha}
                    onChangeText={confirmaSenha => setConfirmaSenha(confirmaSenha)}
                />
                <TouchableOpacity
                    style={styles.botaoConfirmar}
                    activeOpacity={0.7}
                    onPress={funcCriarConta}
                >
                    <Text style={styles.textoConfirmar}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    main: {
        backgroundColor: COLORS.background,
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 80
    },
    inputsContent: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 10
    },
    text: {
        color: COLORS.text,
        fontWeight: 800,
        fontSize: 24
    },
    input: {
        fontSize: 16,
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#000000",
        width: "70%",
        color: "#F0F0F0"
    },
    switch: {
        color: "#F0F0F0",
        fontSize: 24
    },
    botaoConfirmar: {
        backgroundColor: COLORS.primary,
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        width: "70%",
        alignItems: "center"
    },
    textoConfirmar: {
        color: COLORS.text,
        fontSize: 24,
        fontWeight: 800,
    }
})

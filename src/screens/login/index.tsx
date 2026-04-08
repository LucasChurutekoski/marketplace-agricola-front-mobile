import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import api from '../../app/api'
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "expo-router";
import { C, F } from '../../constants/theme'

export default function login() {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation<any>()

    async function fazerLogin() {
        try {
            setLoading(true)
            const response = await api.post('auth/login', { email: email, senha: senha })
            const token = response.data.access_token;
            console.log(token)
            await SecureStore.setItemAsync('token', token);
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert("Ocorreu um erro ao tentar logar, tente novamente")
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholderTextColor={C.text}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor={C.text}
                placeholder="Senha"
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
            />
            <TouchableOpacity
                disabled={loading}
                style={styles.botao}
                onPress={() => fazerLogin()}>
                <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: '100%',
        backgroundColor: C.background,
        gap: 10
    },
    botao: {
        backgroundColor: C.primario,
        borderColor: C.bordas,
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        width: "70%",
        alignItems: "center"
    },
    textoBotao : {
        fontSize : F.textoGrande,
        color : C.text
    },
    input: {
        fontSize: 16,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: C.bordas,
        width: "70%",
        color : C.text
    }
})
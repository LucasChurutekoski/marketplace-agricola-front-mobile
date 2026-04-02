import { useNavigation } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { C, F } from "../../constants/theme"

export default function MenuNavegacao() {

    const navigation = useNavigation<any>()

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.item}
            >
                <Text style={styles.texto}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
                 onPress={() => navigation.navigate("CriarAnuncio")}
            >
                <Text style={styles.texto}>Anunciar +</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
                onPress={() => navigation.navigate("CriarConta")}
            >
                <Text style={styles.texto}>Minha conta</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "12%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: C.background
    },
    item: {
        borderWidth: 1,
        backgroundColor: C.primario,
        padding: 20,
        borderRadius: 24,
        fontSize: F.textoGrande,
        lineHeight: F.lineHeightTextoBase,
        color: C.text
    },
    texto: {
        fontSize: F.textoGrande,
        lineHeight: F.lineHeightTextoBase,
        color: C.text
    }
})
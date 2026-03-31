import { Text } from "@react-navigation/elements";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS,SIZES } from "@/constants/theme";

export default function ProdutosAnunciados() {

    interface Card {
        imagem: string;
        titulo: string;
        descricao: string;
    }


    const [cardsProdutos, setCardsProdutos] = useState<Card[]>([]);
    const [filtro, setFiltro] = useState('')

    function preencherCards() {
        const dadosTeste: Card[] = [
            { imagem: require("../../../assets/images/DefaultUser.jpeg"), titulo: "Produto 1", descricao: "Descrição do produto teste 1 Descrição do produto teste 1 Descrição do produto teste 1 Descrição do produto teste 1 Descrição do produto teste 1 Descrição do produto teste 1 Descrição do produto teste 1 " },
            { imagem: require("../../../assets/images/DefaultUser.jpeg"), titulo: "Produto 2", descricao: "Descrição do produto teste 2" },
            { imagem: require("../../../assets/images/DefaultUser.jpeg"), titulo: "Produto 3", descricao: "Descrição do produto teste 3" },
            { imagem: require("../../../assets/images/DefaultUser.jpeg"), titulo: "Produto 4", descricao: "Descrição do produto teste 4" },
        ];
        setCardsProdutos(dadosTeste);
    }

    useEffect(() => {
        preencherCards();
    }, []);

    return (
        <View style={styles.main}>
            <Text>Tela todos anúncios</Text>
            <TextInput
                style={styles.campoBusca}
                placeholder="Faça uma busca"
                placeholderTextColor={"#f0f0f0"}
                value={filtro}
                onChangeText={value => setFiltro(value)}
            />
            <FlatList
                style={styles.listaProdutos}
                contentContainerStyle={styles.conteudoLista}
                data={cardsProdutos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card} >
                            <View>
                                <Image
                                    style={styles.imagem}
                                    source={item.imagem}
                                    contentFit="cover"
                                />
                            </View>
                            <View style={styles.topoDoCard}>
                                <View style={styles.internoCard}>
                                    <Text style={styles.tituloCard}>{item.titulo}</Text>
                                    <Text style={styles.descricaoCard}>{item.descricao}</Text>
                                </View>
                                <View style={styles.areaBotao}>
                                    <TouchableOpacity
                                        style={styles.botaoComprar}
                                    >
                                        <Text style={styles.textoBotao}>Ver mais</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        backgroundColor: COLORS.background,
        width: "100%",
        height: "100%",
        gap : 10
    },
    listaProdutos: {
        flex: 1,
        width: "100%"
    },
    conteudoLista: {
        width: "100%"
    },
    card: {
        borderWidth: 2,
        borderColor: COLORS.border,
        backgroundColor: COLORS.background,
        borderRadius: 8,
        width: "85%",
        height:500,
        alignSelf: "center",
        padding: 10
    },
    topoDoCard : {
        display : "flex",
        height : "59%",
        justifyContent : "space-between"
    },
    tituloCard: {
        color: COLORS.text,
        fontSize: 24
    },
    descricaoCard: {
        color: COLORS.text,
        fontSize: 16
    },
    botaoComprar: {
        borderWidth: 2,
        borderColor: COLORS.border,
        borderRadius: 16,
        width: "50%",
    },
    textoBotao: {
        fontSize: 24,
        padding: 10,
        alignSelf: "center"
    },
    areaBotao: {
        alignItems: "center",
    },
    internoCard: {
        paddingLeft: 30,
        display: 'flex',
        justifyContent: "space-between",
    },
    imagem: {
        width: "100%",
        height: 200,
    },
    campoBusca : {
        alignSelf : "center",
        width : '85%',
        borderWidth : 2,
        borderColor : COLORS.primary,
        color : COLORS.text,
        borderRadius : 24,
        paddingLeft : 16
    }
})
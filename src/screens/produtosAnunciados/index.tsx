import { C, F } from "@/constants/theme";
import { Text } from "@react-navigation/elements";
import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function ProdutosAnunciados() {

    interface Card {
        imagem: string;
        titulo: string;
        descricao: string;
        preço: string;
    }

    interface Categoria {
        nome: string;
    }

    const navigation = useNavigation<any>();

    const [cardsProdutos, setCardsProdutos] = useState<Card[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [filtro, setFiltro] = useState('')

    function preencherCards() {
        const dadosTeste: Card[] = [
            { imagem: require("../../../assets/images/DefaultUser.jpeg"), titulo: "Produto 1", descricao: "Descrição do produto teste 1 Descrição do produto teste 1", preço: '3,70' },
            { imagem: require("../../../assets/images/DefaultUser.jpeg"), titulo: "Produto 2", descricao: "Descrição do produto teste 2", preço: '3,70' },
            { imagem: require("../../../assets/images/DefaultUser.jpeg"), titulo: "Produto 3", descricao: "Descrição do produto teste 3", preço: '3,70' },
            { imagem: require("../../../assets/images/DefaultUser.jpeg"), titulo: "Produto 4", descricao: "Descrição do produto teste 4", preço: '3,70' },
        ];
        setCardsProdutos(dadosTeste);
    }

    function preencherCategorias() {
        const dadosCategorias: Categoria[] = [
            { nome: "Hortaliças" },
            { nome: "Frutas" },
            { nome: "derivados" },
        ];
        setCategorias(dadosCategorias);
    }

    function abrirCardEspecifico() {
        navigation.navigate('CriarConta');
    }

    useEffect(() => {
        preencherCards();
        preencherCategorias();
    }, []);

    return (
        <View style={styles.main} >
            <FlatList
                horizontal
                style={styles.listaFiltro}
                contentContainerStyle={styles.containerFiltro}
                data={categorias}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <View style={styles.filtro}>
                                <Text style={styles.botaoFiltro}>{item.nome}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
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
                        <TouchableOpacity onPress={() => abrirCardEspecifico()}>
                            <View style={styles.card}>
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
                                        <Text style={styles.preco}>R$ {item.preço}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: C.background,
        width: "100%",
        height: "85%",
        gap: 10
    },
    listaProdutos: {
        flex: 1,
        width: "100%"
    },
    conteudoLista: {
        width: "100%",
        gap: 20
    },
    card: {
        borderWidth: 2,
        borderColor: C.bordas,
        backgroundColor: C.backgroundCard,
        borderRadius: 8,
        width: "85%",
        alignSelf: "center",
        padding: 10
    },
    topoDoCard: {
        display: "flex",
        justifyContent: "space-between"
    },
    tituloCard: {
        color: C.textoPrimario,
        fontSize: F.tituloPrincipal,
    },
    descricaoCard: {
        color: C.textoSecundario,
        fontSize: F.subtitulo
    },
    internoCard: {
        paddingLeft: 30,
        padding: 10,
        gap: 10,
        display: 'flex',
        justifyContent: "space-between"
    },
    imagem: {
        width: "100%",
        height: 200,
    },
    campoBusca: {
        alignSelf: "center",
        width: '85%',
        borderWidth: 2,
        borderColor: C.bordas,
        color: C.textoSecundario,
        fontSize: F.textoMedio,
        fontWeight: F.pesoTextoMedio,
        borderRadius: 24,
        paddingLeft: 16,
    },
    preco: {
        color: C.primario,
        fontSize: 24
    },
    containerFiltro: {
        height: 50,
        paddingHorizontal: 15,
        alignItems: 'center',
        gap: 10
    },
    filtro: {
        backgroundColor: C.primario,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        justifyContent: 'center',
        height: 40,
        fontWeight: F.pesoTextoBase,
        lineHeight: F.lineHeightTextoBase
    },
    botaoFiltro: {
        color: C.textoPrimario,
        fontWeight: F.pesoTextoBase,
        lineHeight: F.lineHeightTextoBase
    },
    listaFiltro: {
        flexGrow: 0
    }
})
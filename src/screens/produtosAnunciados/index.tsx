import { C, F } from "@/constants/theme";
import { Text } from "@react-navigation/elements";
import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import api from '../../app/api'

export default function ProdutosAnunciados() {


    const navigation = useNavigation<any>();

    const [cardsProdutos, setCardsProdutos] = useState<Anuncio[]>([]);
    const [categorias, setCategorias] = useState([]);
    const [filtro, setFiltro] = useState('')

    const baseUrl = "http://192.168.155.66:3000/"

    interface Produtor {
        id: number;
        nome: string;
        email: string;
        role: string;
    }

    interface Categoria {
        id: number;
        nome: string;
    }

    interface Anuncio {
        idAnuncio: number;
        titulo: string;
        descricao: string;
        quantidadeDisponivel: number;
        unidadeMedida: string;
        precoUnitario: number;
        status: string;
        produtor: Produtor;
        categoria: Categoria;
        imagens: Imagem[]
    }

    interface Imagem {
        id: number,
        url: string,
        isPrincipal: boolean
    }

    async function buscarAnuncios() {
        try {
            const response = await api.get('/anuncio')
            setCardsProdutos(response.data)
        } catch (error) {

        }

    }

    function abrirCardEspecifico() {
        navigation.navigate('CriarConta');
    }

    useEffect(() => {
        buscarAnuncios()
    }, [])

    return (
        <View style={styles.main} >
            {/* <FlatList
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
            /> */}
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
                    const imagemPrincipal = item.imagens?.find(img => img.isPrincipal === true)?.url;

                    return (
                        <TouchableOpacity onPress={() => abrirCardEspecifico()}>
                            <View style={styles.card}>
                                <Image
                                    style={styles.imagem}
                                    source={
                                        imagemPrincipal
                                            ? { uri: `${baseUrl}${imagemPrincipal}` }
                                            : require('@/assets/images/icon.png')
                                    }
                                    contentFit="cover"
                                />
                                <View style={styles.topoDoCard}>
                                    <View style={styles.internoCard}>
                                        <Text style={styles.tituloCard}>{item.titulo}</Text>
                                        <Text style={styles.tituloCard}>{item.descricao}</Text>
                                        <Text style={styles.preco}>R$ {item.precoUnitario}</Text>
                                        <Text style={styles.preco}>{item.categoria.nome}</Text>
                                        <Text style={styles.preco}>{item.produtor.nome}</Text>
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
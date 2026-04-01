import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CriarAnuncio() {


    return (
        <View>
            <Text></Text>
        
            <TextInput
                placeholder="Nome Do Produto"
            />
            <TextInput
                placeholder="Categoria"
            />
            <TextInput
                placeholder="Quantidade total disponível:"
            />
            <TextInput
                placeholder="Unidade:"
            />
            <TextInput
                placeholder="preço por unidade"
            />
            <TouchableOpacity>Publicar Anúncio</TouchableOpacity>
        </View>
    )
}
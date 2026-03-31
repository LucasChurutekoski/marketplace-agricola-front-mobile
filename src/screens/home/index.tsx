import { Text } from "@react-navigation/elements";
import { useNavigation } from "expo-router";
import { Button, View } from "react-native";
import ProdutosAnunciados from "../produtosAnunciados";

export default function Home(){

    const navigation = useNavigation<any>();
    return(
        <View>
            <Text> Home</Text>
            <ProdutosAnunciados/>
            <Button
            title="Criar uma conta"
            onPress={() => navigation.navigate("CriarConta")}
            />
        </View>
    )
}
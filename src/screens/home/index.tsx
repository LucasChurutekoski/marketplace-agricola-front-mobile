import { Text } from "@react-navigation/elements";
import { useNavigation } from "expo-router";
import { Button, View } from "react-native";
import ProdutosAnunciados from "../produtosAnunciados";
import MenuNavegacao from "@/components/MenuNavegacao";

export default function Home() {

    const navigation = useNavigation<any>();
    return (
        <View>
            <ProdutosAnunciados />
            <MenuNavegacao />
        </View>
    )
}
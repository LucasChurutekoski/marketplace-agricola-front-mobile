import * as React from 'react';
import { createStaticNavigation, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CriarConta from '@/screens/criarConta';
import Home from '@/screens/home';
import CriarContaProdutor from '@/screens/criarContaProdutor';
import ProdutosAnunciados from '@/screens/produtosAnunciados';
import CriarAnuncio from '@/screens/criarAnuncio';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      options: { title: "Home" }
    },
    CriarConta: {
      screen: CriarConta,
      options: { title: 'Criar Conta' },
    },
    CriarContaProdutor : {
      screen : CriarContaProdutor,
      options : { title : "criar cadastro de produtor"}
    },
    ProdutosAnunciados : {
      screen : ProdutosAnunciados
    },
    CriarAnuncio : {
      screen : CriarAnuncio
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {

  return (
    <NavigationIndependentTree>
      <Navigation />
    </NavigationIndependentTree>
  )
}
import React from "react";
import {
    Text,
    ScrollView,
    View,
    Image
} from "react-native";

import CartNews from './cart';

import styles from './styles';

import newsImage from '../../imgs/newsImage.jpg';

import newsImage1 from '../../imgs/produtos/Geladeira_Brastemp_Prata.jpeg';
import newsImage2 from '../../imgs/produtos/Micro_Ondas_Consul.jpeg';
import newsImage3 from '../../imgs/produtos/Fogão_Atlas.jpeg';
import newsImage4 from '../../imgs/produtos/Fogão_Consul.jpeg';
import newsImage5 from '../../imgs/produtos/Geladeira_Brastemp_Branca.jpeg';


function Produtos() {
    return (


        <ScrollView>


            <View style={{ borderWidth: 0.5, opacity: 0.5, borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0, borderColor: "#20232a", padding: 40, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 30 }}>Melhores marcas do mercado!</Text>
            </View>

            <View style={styles.cardContainer}>
                <CartNews 
                    title='Geladeira'
                    Descricao='Geladeira Eletrolux'
                    img={newsImage1}
                    preco="1.500"
                        
                />
                <CartNews 
                    title='Fogão'
                    Descricao='Fogão Consu'
                    img={newsImage3}
                    preco="1.000"
                        
                />
                <CartNews 
                    title='Geladeira'
                    Descricao='Geladeira Philco'
                    img={newsImage5}
                    preco="1.750"
                        
                />
                <CartNews 
                    title='Microondas'
                    Descricao='Microondas Eletrolux'
                    img={newsImage2}
                    preco="500"
                        
                />
                <CartNews 
                    title='Fogão'
                    Descricao='Fogão Eletrolux'
                    img={newsImage4}
                    preco="2.500"
                        
                />
            </View>

        </ScrollView>

    );
}

{/* style={{borderWidth: 2,borderColor: "#20232a"}} */ }

export default Produtos;



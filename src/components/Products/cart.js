import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Linking,
  Image,
} from "react-native";

import styles from './styles';


function CartNews(props) {

  return (

    <View style={styles.card}>
      <View style={styles.cardText}>
        <View style={styles.cartNews}>
          <Image style={styles.newsImage} source={props.img} />
        </View>


        <View style={styles.cartInfos}>
          <View>
            <Text style={{ fontSize: 20, textAlign: "center" }}>
                {props.title}
            </Text>
            <Text style={{ fontSize: 20, textAlign: "center" }}>
                {props.Descricao}
            </Text>
            <Text style={{ fontSize: 20, textAlign: "center", textDecorationLine:"line-through"}}>
                De R${props.preco}
            </Text>
            <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "700", color: "red"}}>
                Por R${props.preco}
            </Text>
          </View>

          <View style={styles.botaoCard}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.texto}>+ carrinho</Text>
            </TouchableOpacity>
          </View>
        </View>


      </View>
    </View>
  );
}

export default CartNews;

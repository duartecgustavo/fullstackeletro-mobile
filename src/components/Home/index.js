import React from "react";
import {
    Text,
    View,
    StatusBar,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from "react-native";

import imageHome from "../../imgs/Home/imageHome.png";
import imageBG from "../../imgs/imageBG.png";
import img1 from "../../imgs/Home/banner-home-min.jpg";
import img2 from "../../imgs/Home/banner-menor-min2.jpg";
import img3 from "../../imgs/Home/banner1-home.png";
import Cart from "./cart";
import styles from "./styles";

function Home({navigation}) {

    function linkLogar() {
        navigation.navigate("Login")
    }
    function linkNoticias() {
        navigation.navigate("Noticias")
    }
    
    return (

        <ScrollView style={{fontFamily: "monospace"}}>
            <ImageBackground source={imageBG} style={styles.imageBG}>
            <StatusBar />

            <View style={styles.cartImage}>
                <Image source={imageHome} style={styles.imageHomeTop} />
                <Text style={{textAlign: "center", padding:"6%", fontSize: 23}}>"a vaga ta lá esperando vc! ✌"</Text>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                <Image source={img1} style={styles.imageHome} />
                </View>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                <Image source={img2} style={styles.imageHome} />
                </View>
            </View>
                    
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                <Image source={img3} style={styles.imageHome} />
                </View>
            </View>

            </ImageBackground>

        </ScrollView>
    );
}

export default Home;

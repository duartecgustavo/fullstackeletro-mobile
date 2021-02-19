import {
    StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
    cartImage: {
        width: "100%", 
    },
    image: {
        width: "100%", 
        height: 150,
    },
    cartNews: {
        display: "flex",
        flexDirection: "column",
        width: "100%", 
        height: 300,
    },
    cardContainer: {
        width: "100%",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    newsImage: {
        width: 300, 
        height:290,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    card: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#dc3545",
        marginBottom: 20
    },
    cartInfos:{
        alignItems: "center",
        padding: 10,
    },
    cardText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    botaoCard: {
        width: "80%",
    },
    btn: {
        backgroundColor: "#4895ef",
        width: "100%",
        marginTop: 12,
        padding: 8,
        borderRadius: 5
    },
    texto: {
        fontSize: 18,
        color: "white",
        textAlign: "center"
    }
})

export default styles;
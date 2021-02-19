import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    cartImage: {
        width: "100%"
    },
    imageHomeTop: {
        width: "100%", 
        height: 200,
        borderRadius: 5,
    },
    imageHome: {
        width: "100%", 
        height: 294,
        borderRadius: 10,
    },
    cardContainer: {
        width: "100%",
        padding: 5,
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15
    },
    card: {
        backgroundColor: "#DC3545",
        padding: 3,
        width: "90%",
        height: 300,
        alignItems: "center",
        borderRadius: 10
    },
    cardText: {
        alignItems: "center",
        marginBottom: 10,
        color: "black",
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
    },
    imageBG: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});

export default styles;
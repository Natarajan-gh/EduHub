import { StyleSheet } from "react-native";

export const GetStartStyle = StyleSheet.create({
    HeadContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#2960b9",
        paddingVertical: 50
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageQuote: {
        fontSize: 20,
        fontWeight: 900,
        color: "#fff",
        padding: 5
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    button: {
        height: 50,
        width: 300,
        backgroundColor: "#F39C12",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 900,
        color: "#fff"
    }
});
import { StyleSheet } from "react-native";

export const CollectorStyle = StyleSheet.create({
    main_container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#2960b9",
        height: "100%",
    },
    title: {
        fontSize: 20,
        color: "#fff",
        paddingVertical: 50,
        fontWeight: 900,
        paddingHorizontal: 15
    },
    list: {
        padding: 10
    },
    department_btn: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 40,
        borderColor: "#fff",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        elevation: 10,
        backgroundColor: '#fff',
        padding: 8,
        alignSelf: "flex-start",
        minWidth: 150
    },
    btn_txt: {
        color: '#fff',
        fontWeight: 900
    },
    next_btn: {
        height: 50,
        width: 300,
        backgroundColor: "#F39C12",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
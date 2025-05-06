import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
    main_container: {
        margin: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Profile_container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#ddd",
        margin: 10
    },
    name: {
        fontSize: 25,
        fontWeight: 500
    }
});
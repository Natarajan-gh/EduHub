
import { useTheme } from "@rneui/themed";
import { Text, View } from "react-native";

export default function Home() {
    const { theme } = useTheme();
    return (
        <View style={theme?.HomeStyle.main_container}>
            <View style={theme?.HomeStyle.header}>
                <View style={theme?.HomeStyle.Profile_container}></View>
                <Text style={theme?.HomeStyle.name}>Name</Text>
            </View>
        </View>
    );
}
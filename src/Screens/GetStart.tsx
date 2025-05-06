import { useTheme } from "@rneui/themed";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { useTypedNavigation } from "../Types/UseTypedNavigation";


export default function GetStart() {
    const { theme } = useTheme();
    const content = "Find the Perfect career options for you!";
    const [loader, setLoader] = useState(false);
    const [runningText, setRunningText] = useState("");
    const [index, setIndex] = useState(0);
    const [blink, setBlink] = useState(false);
    const navigation = useTypedNavigation();

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < content.length) {
                setRunningText((prev) => prev + content[index]);
                setIndex(index => index + 1);
            } else {
                clearInterval(interval);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [content, index]);

    useEffect(() => {
        const inter = setInterval(() => {
            setBlink(!blink);
        }, 500);
        return () => clearTimeout(inter);
    }, [blink]);

    function onprs() {
        setLoader(true);
        setTimeout(() => {
            navigation.navigate('collector');
            setLoader(false);
        }, 2000);
    }
    return (
        <View style={theme?.GetStartStyle.HeadContainer}>
            <View style={theme?.GetStartStyle.contentContainer}>
                <Text style={[theme?.GetStartStyle.pageQuote, { color: "#F0ca1F", padding: 40, fontSize: 80 }]}>{runningText}
                    <Text>{blink ? <View style={{ height: 70, width: 3, backgroundColor: "#fff" }}></View> : null}</Text>
                </Text>
                {runningText == content ? <Text style={[theme?.GetStartStyle.pageQuote, { paddingHorizontal: 40 }]}>STOP CONFUSE, START WITH CONFIDENCE</Text> : null}
            </View>
            <View style={theme?.GetStartStyle.buttonContainer}>
                <TouchableOpacity style={theme?.GetStartStyle.button} activeOpacity={0.7} onPress={() => onprs()}>
                    {loader == false ? <Text style={theme?.GetStartStyle.buttonText}>GET START</Text> :
                        <ActivityIndicator style={{ borderColor: '#fff' }} color={"#fff"} size={"small"}></ActivityIndicator>}
                </TouchableOpacity>
            </View>
        </View >
    );
}
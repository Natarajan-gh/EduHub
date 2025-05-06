import { useTheme } from "@rneui/themed";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, View, VirtualizedList } from "react-native";
import { useTypedNavigation } from "../Types/UseTypedNavigation";

export default function Collector() {
    const { theme } = useTheme();
    const [education, seteducation] = useState(null);
    const [index, setIndex] = useState(null);
    const departments = ['Science', 'Computer science', 'History', 'Accounts', 'Engineering', 'language'];
    const interestList = [['Pure Sciences', 'Biological Sciences', 'Environmental & Earth Sciences', 'Specialized & Interdisciplinary Programs', 'Space & Research-Oriented Programs'],
    ['Computer Science', ' Information Technology (IT)', 'Data science', 'Cyber security', 'Ethical Hacking', 'Human-Computer Interaction', 'Robotics', 'Game design & developement', 'Internet of Things(IOT)', 'computer science & business administration', 'computer science & design'],
    ['History', 'Ancient Indian History and Archaeology', ' Heritage and Museum Studies'],
    ['Commerce', 'Economics', 'Business Administration', 'Business Management', 'Management studies', 'Accounting & Finance', 'Banking and Insurance', 'Taxation', 'Corporate Secretaryship',],
    ['Mechanical Engineering', 'Civil', 'EEE', 'ECE', 'Bio-technology', 'Bio medical', 'Agriculture'],
    ['Tamil', 'English', 'French', 'German', 'Hindi', 'Linguistics']];
    const [interest, setInterest] = useState(null);
    const navigation = useTypedNavigation();

    return (
        <View style={theme?.CollectorStyle.main_container}>
            <View style={{ flex: 1 }}>
                <Text style={theme?.CollectorStyle.title}>What's in your mind?</Text>
                <VirtualizedList
                    data={departments}
                    initialNumToRender={4}
                    getItem={(_data, index) => _data[index]}
                    getItemCount={(_data: any) => _data.length}
                    renderItem={(item: any) => (
                        <TouchableOpacity style={[theme?.CollectorStyle.department_btn, education === item.item && { borderColor: '#F39C12', backgroundColor: '#F39C12' }]} onPress={() => { seteducation(item.item); setIndex(item.index); setInterest(null) }}>
                            <Text style={[education === item.item && theme?.CollectorStyle.btn_txt, { fontWeight: 500 }]}>{item.item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => item.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    alwaysBounceHorizontal={true}
                />
            </View>
            <View style={{ flex: 2 }}>
                {education != null ?
                    <>
                        <Text style={theme?.CollectorStyle.title}>Tell about your interest in the respective area?</Text>
                        <VirtualizedList
                            data={interestList[index!]}
                            initialNumToRender={1}
                            getItem={(_data, index) => _data[index]}
                            getItemCount={(_data: any) => _data.length}
                            renderItem={(item: any) => (
                                <TouchableOpacity style={[theme?.CollectorStyle.department_btn, interest === item.item && { borderColor: '#F39C12', backgroundColor: '#F39C12' }]} onPress={() => { setInterest(item.item) }}>
                                    <Text style={interest === item.item && theme?.CollectorStyle.btn_txt}>{item.item}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item, index) => item.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            alwaysBounceHorizontal={true}
                        /></>
                    : null}
            </View>
            <View style={{ flex: 1 }}>
                {interest != null ?
                    <TouchableOpacity style={theme?.CollectorStyle.next_btn} onPress={() => navigation.navigate("home")}><Text style={{ color: '#fff', fontWeight: 900, fontSize: 20 }}>Continue</Text></TouchableOpacity> :
                    <Text style={{ color: '#F39C12', fontWeight: 900, fontSize: 20 }}>Please Select the required fields</Text>}
            </View>
        </View>
    );
}
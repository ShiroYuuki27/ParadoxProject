import { Text, View, StyleSheet } from "react-native";
import Background from "./Background";
import Btn from "./Btn";

export default function HomePage(props) {
    return (
        <Background>
            <View style={{
            marginHorizontal: 40,
            marginVertical: 100,
            alignItems: 'center',}}
            >
            <Text style={{color: 'black', fontSize: 45, }}>
                Yokoso
            </Text>
            <Text style={{color: 'black', fontSize: 45, marginBottom: 50 }}>
                Minna
            </Text>
            <Btn bgColor="rgba(255,0,0,0.7)" textColor="black" btnLabel="Login" wBtn={300}></Btn>
            <Btn bgColor="rgba(255,255,0,0.6)" textColor="maroon" btnLabel="SignUp" wBtn={300}></Btn>
            </View>
        </Background>
    );
}


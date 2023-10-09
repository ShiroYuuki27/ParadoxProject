import { Text, View, StyleSheet } from "react-native";
import Background from "./Background";
import Btn from "./Btn";

    

export default function Home2(props) {
    return(
        <Background>
            <View style={{marginHorizontal:95, marginVertical:350, alignItems:'center'}}>
            <Text style={{color:'white', fontSize:45}}>Let's Start</Text>
            <Text style={{color:'white', fontSize:20, marginBottom:50}}>Use Application</Text>
            <Btn
                bgColor="rgba(255,0,0,0.6)"
                textColor="white"
                btnLabel="Login"
                wBtn={200}
                Press={() => props.navigation.navigate('Login')} 
            />

            <Btn
                bgColor="rgba(255,255,0,0.6)"
                textColor="white"
                btnLabel="Sign Up"
                wBtn={200}
                Press={() => props.navigation.navigate('SignUp')}
            />

            </View>
        </Background>

        );
}
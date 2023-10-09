import { Text, TouchableOpacity, View } from 'react-native';
import Background from './Background';
import Field from './Field';
import Btn from './Btn';

export default function SignUp(props) {
  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 60,
            fontWeight: 'bold',
          }}
        >
          Sign Up
        </Text>
        <Text style={{ color: 'white', fontSize: 19, marginBottom: 10 }}>Crate Your Account</Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 450,
            borderTopLeftRadius: 130,
            paddingTop: 35,
            alignItems: 'center',
          }}
        >
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field placeholder="Email" keyboardType={'email-address'} />
          <Field placeholder="contact Number" keyboardType={'number'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />

          <Btn textColor="white" bgColor="blue" btnLabel="Register" wBtn={300} />

          <Text>Already have an account ?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={{ color: 'darkblue', fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
}

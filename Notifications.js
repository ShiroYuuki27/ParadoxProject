import { Button, View } from 'react-native';
export default function Notifications({navigation}) {
return (
        <View style={{ flex: 1,
            alignItems: 'center',
            justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()}
            title="Go back home" />
        </View>
    );
}
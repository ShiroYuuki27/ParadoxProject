import { TextInput } from 'react-native'; export default function Field (props) {
    return (
        <TextInput
            {...props}
                style={{
                borderRadius: 70, 
                color: 'blue', 
                paddingVertical: 10, 
                width: '70%', 
                backgroundColor: 'lightblue',
                borderWidth: 2,
                borderBottomColor: 'red',
                marginVertical: 10, 
                textAlign: 'center',
                }}
            placeholderTextColor={'gray'}
        ></TextInput>
    );
}
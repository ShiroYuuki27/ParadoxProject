import { Text, TouchableOpacity} from "react-native";

export default function Btn({ bgColor, btnLabel, textColor, Press, wBtn}) {
    return (
        <TouchableOpacity
            onPress={Press}
            style={{
                backgroundColor: bgColor,
                borderRadius: 70,
                alignItems: 'center',
                width: wBtn,
                paddingVertical: 5,
                marginVertical: 5,
            }}        
        >

        <Text
        style={{
            color: textColor,
            fontSize: 22,
            fontWeight: 'bold',
        }}
        >
                {btnLabel}
        </Text>    
           
        </TouchableOpacity>
    )
}
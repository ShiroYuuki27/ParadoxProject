import { Text, View, Switch } from 'react-native';
import { useColorScheme } from 'nativewind';
import { StatusBar } from 'expo-status-bar';

export default function App1() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      <Text className="dark:text-white text-2xl font-bold">New collection</Text>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </View>
  );
}

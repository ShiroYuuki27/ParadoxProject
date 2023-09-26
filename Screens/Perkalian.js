import { View, Text, StyleSheet, Button, TextInput, ImageBackground, SafeAreaView, ScrollView, StatusBar, } from "react-native";
import React, { useState } from "react";
export default function Perkalian({navigation}) {

  const [nilai1, setnilai1] = useState("0");
  const [nilai2, setnilai2] = useState("0");
  const [nilai3, setnilai3] = useState("0");

  function Perkalian() {
    setnilai3(parseInt(nilai1) * parseInt(nilai2));
  }

    return (
       <SafeAreaView style={styles.container}>
         <ScrollView style={styles.scrollView}>
            <Text style={{ color: "blue", fontSize: 20, textAlign: "center" }}>Perkalian</Text>
            <TextInput
                style={styles.FormatInput}
                placeholder="Masukan Nilai "
                value={nilai1}
                onChangeText={(x) => setnilai1(x)}
            />
            <TextInput
                style={styles.FormatInput}
                placeholder="Masukan Nilai "
                value={nilai2}
                onChangeText={(x) => setnilai2(x)}
            />
            <Button color="red" title="Perkalian" onPress={Perkalian} />
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hasil : {nilai3}</Text>
            <Button onPress={() => navigation.goBack()}
            title="Go back home" />
         </ScrollView>    
    </SafeAreaView>     
    );
}

const styles = StyleSheet.create({
  
    FormatInput: {
    color: "blue",
    borderColor: "yellow",
    borderWidth: 2,
    fontSize: 15,
    backgroundColor: "pink",
    padding: 10,
    marginBottom: 20,
  },

  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 20,
  },

});
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList } from 'react-native';

export default class ShowAllNovel extends Component {
  constructor(props) {
    super(props);
    this.state = { ListData: [] };
  }

  componentDidMount() {
    this.SearchRecord();
  }

  SearchRecord = () => {
    // ------ ini script untuk call API -----------------------------
    var API_Url = 'http://192.168.141.8/Paradox/DataNovel.php'; //10.0.2.2:80
    var Data = {
      pilih: 4,
    };

    fetch(API_Url, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({ ListData: response });
      })
      .catch((error) => {
        alert('Error' + error);
      });
    // ------------END Call API-------------------
  };
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>LIST NOVEL</Text>
        <FlatList
          data={this.state.ListData}
          renderItem={({ item, index }) => (
            <View style={styles.viewData}>
              <Text>----------------------------</Text>
              <Text>Novel ID : {item.nid}</Text>
              <Text>Judul : {item.judul}</Text>
              <Text>Tahun : {item.tahun}</Text>
              <Text>Pengarang Name : {item.pengarang}</Text>
              <Text>Penerbit : {item.penerbit}</Text>
              <Text>Volume : {item.volume}</Text>
            </View>
          )}
          keyExtractor={(item) => item.nid}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewData: {
    marginBottom: 20,
  },
  viewStyle: {
    flex: 1,
    padding: 20,
    marginTop: 10,
  },

  txtStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'skyblue',
    marginBottom: 20,
  },

  txtStyle2: {
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'skyblue',
    marginBottom: 20,
  },
});

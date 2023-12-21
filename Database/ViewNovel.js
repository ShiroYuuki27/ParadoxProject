import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default class ViewCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = { nid: '', judul: '', pengarang: '', volume: '' };
  }

  SearchRecord = () => {
    var nid = this.state.nid;

    if (nid.length == 0) {
      alert('Jangan Kosong Bro');
    } else {
      // ------ ini script untuk call API -----------------------------
      var API_Url = 'http://192.168.141.8/Paradox/DataNovel.php';
      var Data = {
        nid: nid,
        pilih: 5,
      };

      fetch(API_Url, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          // alert(response[0].cid);
          this.setState({ judul: response[0].judul });
          this.setState({ pengarang: response[0].pengarang });
          this.setState({ volume: response[0].volume });
        })
        .catch((error) => {
          alert('Error' + error);
        });
      // ------------END Call API-------------------
    }
  };
  render() {
    return (
      <View style={styles.viewStyle}>
        <TextInput placeholder="Novel Id" style={styles.txtStyle} placeholderTextColor={'grey'} value={this.state.nid} onChangeText={(nid) => this.setState({ nid })} />
        <Button title={'Find Record'} onPress={this.SearchRecord} />
        <TextInput style={styles.txtStyle2} value={this.state.judul} />
        <TextInput style={styles.txtStyle} value={this.state.pengarang} />
        <TextInput style={styles.txtStyle} value={this.state.volume} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

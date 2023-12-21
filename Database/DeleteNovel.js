import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default class DeleteCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = { nid: '', judul: '', tahun: '', penerbit: '', pengarang: '', volume: '' };
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
          alert(response[0].msg);
          this.setState({ judul: response[0].judul });
          this.setState({ tahun: response[0].tahun });
          this.setState({ pengarang: response[0].pengarang });
          this.setState({ penerbit: response[0].penerbit });
          this.setState({ volume: response[0].volume });
        })
        .catch((error) => {
          alert('Error' + error);
        });
      // ------------END Call API-------------------
    }
  };

  DeleteRecord = () => {
    var nid = this.state.nid;

    if (nid.length == 0) {
      alert('Jangan Kosong Bro');
    } else {
      // ------ ini script untuk call API -----------------------------
      var API_Url = 'http://192.168.141.8/Paradox/DataNovel.php';
      var Data = {
        nid: nid,
        pilih: 3,
      };

      fetch(API_Url, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          alert(response[0].Message);
          this.setState({ judul: '' });
          this.setState({ tahun: '' });
          this.setState({ pengarang: '' });
          this.setState({ penerbit: '' });
          this.setState({ volume: '' });
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
        <TextInput placeholder="Novel ID" style={styles.txtStyle} placeholderTextColor={'grey'} value={this.state.nid} onChangeText={(nid) => this.setState({ nid })} />
        <Button title={'Find Record'} onPress={this.SearchRecord} />
        <TextInput placeholder="Judul" style={styles.txtStyle} value={this.state.judul} onChangeText={(judul) => this.setState({ judul })} />
        <TextInput placeholder="Tahun" style={styles.txtStyle} value={this.state.tahun} onChangeText={(tahun) => this.setState({ tahun })} />
        <TextInput placeholder="Pengarang" style={styles.txtStyle} value={this.state.pengarang} onChangeText={(pengarang) => this.setState({ pengarang })} />
        <TextInput placeholder="Penerbit" style={styles.txtStyle} value={this.state.penerbit} onChangeText={(penerbit) => this.setState({ penerbit })} />
        <TextInput placeholder="Volume" style={styles.txtStyle} value={this.state.volume} onChangeText={(volume) => this.setState({ volume })} />
        <Button title={'Delete Record'} style={{ marginBottom: 30 }} onPress={this.DeleteRecord} />
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

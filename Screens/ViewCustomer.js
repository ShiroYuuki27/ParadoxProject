import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default class ViewCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = { cid: '', company: '', city: '', country: '' };
  }

  SearchRecord = () => {
    var customerid = this.state.cid;

    if (customerid.length == 0) {
      alert('Jangan Kosong Bro');
    } else {
      // ------ ini script untuk call API -----------------------------
      var API_Url = 'http://192.168.141.8/Paradox/DataProcess.php';
      var Data = {
        cid: customerid,
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
          this.setState({ company: response[0].cname });
          this.setState({ city: response[0].city });
          this.setState({ country: response[0].country });
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
        <TextInput placeholder="Customer ID" style={styles.txtStyle} placeholderTextColor={'grey'} value={this.state.cid} onChangeText={(cid) => this.setState({ cid })} />
        <Button title={'Find Record'} onPress={this.SearchRecord} />
        <TextInput style={styles.txtStyle2} value={this.state.company} />
        <TextInput style={styles.txtStyle} value={this.state.city} />
        <TextInput style={styles.txtStyle} value={this.state.country} />
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

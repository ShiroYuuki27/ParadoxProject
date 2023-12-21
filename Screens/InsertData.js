import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default class InsertData extends Component {
  constructor(props) {
    super(props);
    this.state = { cid: '', company: '', city: '', country: '', contact: '', jobTitle: '' };
  }

  SaveRecord = () => {
    var customerid = this.state.cid;
    var company = this.state.company;
    var contact = this.state.contact;
    var jobTitle = this.state.jobTitle;
    var city = this.state.city;
    var country = this.state.country;

    if (customerid.length == 0) {
      alert('Jangan Kosong Bro');
    } else {
      // ------ ini script untuk call API -----------------------------
      var API_Url = 'http://192.168.141.8/Paradox/DataProcess.php';
      var Data = {
        cid: customerid,
        company: company,
        contact: contact,
        title: jobTitle,
        city: city,
        country: country,
        pilih: 1,
      };

      fetch(API_Url, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          alert(response[0].Message);

          this.setState({ company: '' });
          this.setState({ city: '' });
          this.setState({ country: '' });
          this.setState({ cid: '' });
          this.setState({ jobTitle: '' });
          this.setState({ contact: '' });
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
        <TextInput placeholder="Company Name" style={styles.txtStyle} value={this.state.company} onChangeText={(company) => this.setState({ company })} />
        <TextInput placeholder="Contact Name" style={styles.txtStyle} value={this.state.contact} onChangeText={(contact) => this.setState({ contact })} />
        <TextInput placeholder="Job Title" style={styles.txtStyle} value={this.state.jobTitle} onChangeText={(jobTitle) => this.setState({ jobTitle })} />
        <TextInput placeholder="City" style={styles.txtStyle} value={this.state.city} onChangeText={(city) => this.setState({ city })} />
        <TextInput placeholder="Country" style={styles.txtStyle1} value={this.state.country} onChangeText={(country) => this.setState({ country })} />
        <Button title={'Save Record'} style={{ marginBottom: 30 }} onPress={this.SaveRecord} />
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

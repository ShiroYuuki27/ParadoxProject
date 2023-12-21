import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class SelectProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.SearchRecord();
  }

  // Starting API Function
  SearchRecord = () => {
    var API_Url = 'http://192.168.1.2/Paradox/ava.php';

    fetch(API_Url)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response });
      })
      .catch((error) => {
        alert('Error' + error);
      });
    // ------------END Call API-------------------
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => (
            <View>
              <Text>----</Text>
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}
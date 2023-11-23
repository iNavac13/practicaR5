import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Actions } from "react-native-router-flux";

export default class ArtistDetailView extends Component<Props> {
  static navigationOptions = {
    headerLeft: () => (
      <TouchableOpacity onPress={() => Actions.pop()}>
        <Text style={styles.btnRegresar}>Regresar</Text>
      </TouchableOpacity>
    ),
  };

  render() {
    const { artist } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: artist.image }} />
        <Text style={styles.artistName}>{artist.name}</Text>
        <Text style={styles.boldText}>Listeners:</Text>
        <Text>{artist.listener}</Text>
        <Text style={styles.boldText}>MBID:</Text>
        <Text style={styles.artistId}>{artist.id}</Text>
          <Text style={styles.boldText}>Streamable:</Text>
          <Text>{artist.streamable}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    backgroundColor: '#9BBEC8',
    margin: 30,
    padding: 20,
    borderRadius: 30,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 30,
    marginBottom: 50,
  },
  artistName: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center'
  },
  artistId: {
    fontSize: 15,
    fontFamily: "roboto",
    textAlign: 'center'
  },
  boldText:{
    fontWeight: 'bold',
    marginTop: 20,
  },
  btnRegresar: {
    marginLeft: 40,
  }
});
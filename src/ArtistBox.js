import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class ArtistBox extends Component<Props> {
  render() {
    const { image, name } = this.props.artist;
    return (
      <View style={styles.artistBox}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  artistBox: {
    margin: 5,
    backgroundColor: "white",
    flexDirection: "row",
  },
  image: {
    width: 170,
    height: 170,
  },
  info: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 25,
  },
});
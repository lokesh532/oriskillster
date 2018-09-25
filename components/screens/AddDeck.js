import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";

type Props = {};
export default class AddDeck extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Adding new Deck</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

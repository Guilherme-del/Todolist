import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default class Note extends Component {
  render() {
    return (
      <View style={styles.note}>
        <Text style={styles.noteDate}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

        <TouchableOpacity
          onPress={this.props.deleteHandler}
          style={styles.noteDelete}
        >
          <Text style={styles.noteDeleteText}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed"
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#1E90FF"
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E91E63",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteDeleteText: {
    color: "#fff"
  }
});

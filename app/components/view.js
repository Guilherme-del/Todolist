//Import dependencies
import React,{ Component }  from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Note from "./note";
import { 
 BungeeShade_400Regular,
} from '@expo-google-fonts/bungee-shade';
import {AppLoading} from "expo";
import * as Font from 'expo-font';
import AnimatedSplash from "react-native-animated-splash-screen";


//Article component
export default class Main extends Component {
  state = {
    noteArray: [],
    noteText: "",
    fontsLoaded: false,
  }

  async loadFonts() {
    await Font.loadAsync({
      // Load a font ` BungeeShade_400Regular` from a static resource
      BungeeShade_400Regular: require('../assets/fonts/BungeeShade_400Regular.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
    this.loadFonts();
  }

  addNote = e => {
    if (this.state.noteText) {
      let d = new Date();
      const newNote = {
        //date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        date: d.getDate()+"/"+"0"+(d.getMonth()+1) + "/" + d.getFullYear() + "- " + d.getHours() + ":" + d.getMinutes()+":"+d.getSeconds(),
        note: this.state.noteText
      };
      this.setState({
        noteArray: [...this.state.noteArray, newNote],
        noteText: ""
      });
    }
  };

  deleteNote(key) {  
    delete this.state.noteArray[key]
    const results = [];
    this.state.noteArray.forEach(element => {
      if (element !== undefined) {
        results.push(element);
      }
    });
    this.setState({noteArray: results})
}

  render() {
    let notes = this.state.noteArray.map((val, id) => {
      return (
        <Note key={id} val={val} deleteMethod={() => this.deleteNote(id)} />
      );
    });
    if (this.state.fontsLoaded) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> TodoList-App </Text>
        </View>
        <ScrollView style={styles.scrollConatiner}>{notes}</ScrollView>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={noteText => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder=">note"
            placeholderTextColor="#fff"
            underlineColorAndroid="#0000"
          />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={this.addNote}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
    }
    else {
      return (
        <AnimatedSplash
          translucent={true}
          isLoaded={this.state.isLoaded}
          logoImage={require("../assets/img/icon.png")}
          backgroundColor={"#262626"}
          logoHeight={150}
          logoWidth={150}
        >
        </AnimatedSplash>
      );
    }
    }
  }

//Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#1E90FF",
    justifyContent: "center",
    alignItems: "center",   
    borderBottomWidth: 10,
    borderBottomColor: "#ddd"
  },
  headerText: {
    color: "#fff",
    fontSize: 32,
    padding:26,
    fontFamily:"BungeeShade_400Regular" 
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed"
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: "#1E90FF",
    width: 90,
    height: 90,
    borderRadius: 59,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24
  }
});

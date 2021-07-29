//Import dependencies
import React,{ Component,useState }  from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Note from "./note";
import * as font from "expo-font";
import {AppLoading} from "expo";

const fetchFont = () => {
 return font.loadAsync({
    'grasping': require('../assets/fonts/grasping.ttf') 
  })
}
//Article component
export default class Main extends Component {
  state = {
    noteArray: [],
    noteText: ""
  }

  addNote = e => {
    if (this.state.noteText) {
      let d = new Date();
      const newNote = {
        date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        note: this.state.noteText
      };
      this.setState({
        noteArray: [...this.state.noteArray, newNote],
        noteText: ""
      });
    }
  };

  render() {
    let notes = this.state.noteArray.map((val, id) => {
      return (
        <Note key={id} val={val} deleteMethod={() => this.deleteNote(key)} />
      );
    });

const [fontLoaded, setfontlLoaded] = useState(false);
if(!fontsloaded){
  return <AppLoading
  startasync= {fetchFont}
  onError ={() => console.log('erro ao loadar a font')}
  onFinish ={() => setfontlLoaded(true)
  }
    />;
}
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> TodoListApp </Text>
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
    fontSize: 18,
    padding:26,
    fontFamily:"grasping" 
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

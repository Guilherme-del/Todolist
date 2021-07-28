import React from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView,TouchableOpacity } from 'react-native';

export default function main() {
  return (
    <View style={styles.container}>
      <Text>teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex : 1,
  backgroundColor:'#fff',
  justifyContent: 'center',
  alignItems: 'center',
  },
});

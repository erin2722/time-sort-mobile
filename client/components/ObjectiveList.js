import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function ObjectiveList() {
  return (
      <View style = {styles.container}>
          <Text style = {styles.label}>Here are all of the objectives you've entered so far.</Text>
          <Text style = {styles.description}>No objectives tracked! Fill out the form above to start adding some!</Text>
      </View>
  );
  }

const styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      flex: 1,
      backgroundColor: "#f2f2f2",
      padding: 30,
    },
    label: {
        fontWeight: "700",
        fontSize: 24,
        paddingBottom: 3,
    },
    description: {
        fontWeight: "300",
        marginTop: 10,
        marginBottom: 10 
    },
});
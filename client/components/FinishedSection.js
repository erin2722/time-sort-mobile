import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function FinishedSection(props) {
  return (
      <View style = {styles.container}>
          <Text style = {styles.label}>Finished?</Text>
          <Text style = {styles.description}>Go ahead and click done to log into google and update your calendar!</Text>
          <OptionButton
            label="Done"
            onPress={() => props.submit()}
          />
      </View>
  );
  }

  function OptionButton({ label, onPress }) {
    return (
      <RectButton style={styles.buttonStyle} onPress={onPress}>
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonText}>{label}</Text>
          </View>
      </RectButton>
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
    buttonStyle: {
        borderRadius: 3,
        backgroundColor: "black",
        padding: 7,
        paddingRight: 30,
        paddingLeft: 30,
    },
    buttonText: {
        color: "white",
    }
});
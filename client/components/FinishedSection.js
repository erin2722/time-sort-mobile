import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import * as WebBrowser from 'expo-web-browser';
import { RectButton } from 'react-native-gesture-handler';

export default class FinishedSection extends Component {
  constructor(props) {
    super(props)
  }
  render() {
  return (
      <View style = {styles.container}>
          <Text style = {styles.label}>Finished?</Text>
          <Text style = {styles.description}>Go ahead and click done to log into google and update your calendar!</Text>
          <RectButton style={styles.buttonStyle} onPress={this.props.submit}>
            <View style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Done</Text>
            </View>
          </RectButton>
      </View>
  );
  }
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
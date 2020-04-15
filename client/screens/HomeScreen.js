import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style = {styles.textContainer}>
          <Text style = {styles.description}>Start Organizing Your Life One Task At A Time.</Text>
          <Text style = {styles.textInfo}>Timify can schedule tasks into your Google calendar automatically so you don't have to worry about it.</Text>
        </View>

        <View>
          <Image
            source={require('../assets/images/schedule.png')}
            style={styles.scheduleIMG}
          />
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
  },
  textContainer: {
    backgroundColor: 'black',
    padding: 20,
  },
  description: {
    color: 'white',
    fontWeight: "700",
    fontSize: 36,
    marginBottom: 20,
  },
  textInfo: {
    color: 'white',
    fontWeight: "300",
    fontSize: 24,
  },
  scheduleIMG: {
    margin: 50,
    width: 290,
    height: 230
  }, 
});

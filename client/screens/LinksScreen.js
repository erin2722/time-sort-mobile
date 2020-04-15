import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import FinishedSection from '../components/FinishedSection';
import ObjectiveForm from '../components/ObjectiveForm';
import ObjectiveList from '../components/ObjectiveList';
import TimeBoundSection from '../components/TimeBoundSection';

export default function LinksScreen() {
  const [tasks, addTask] = React.useState([]);
  const [startTime, setStart] = React.useState(new Date())
  const [endTime, setEnd] = React.useState(new Date())


  const addNewTask = (newTask) => {
    addTask(tasks.push(newTask))
    console.log(tasks)
  }

  const setTimeBound = (time, index) => {
    if(index === 0) {
      setStart(time)
    } else {
      setEnd(time)
    }
  }

  const submit = () => {
    console.log(tasks)
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <ObjectiveForm addTask={addNewTask} />
      <ObjectiveList tasks = {tasks} />
      <TimeBoundSection setTimeBound = {setTimeBound} />
      <FinishedSection submit = {submit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },

});

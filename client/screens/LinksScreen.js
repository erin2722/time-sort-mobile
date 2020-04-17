import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import FinishedSection from '../components/FinishedSection';
import ObjectiveForm from '../components/ObjectiveForm';
import ObjectiveList from '../components/ObjectiveList';
import TimeBoundSection from '../components/TimeBoundSection';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 0,
  },

});


export default class LinksScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      startTime: new Date(),
      endTime: new Date()
    }

    this.addNewTask = this.addNewTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.setTimeBound = this.setTimeBound.bind(this)
    this.submit = this.submit.bind(this)
  }


  addNewTask(newTask) {
    this.setState({
      tasks: this.state.tasks.concat(newTask)
    })
  }
  
  deleteTask(deletedTask) {
    let tasks = this.state.tasks
    var found = true
    var index;
    for(var i = 0; i < tasks.length; i+=1) {
      for(var p in tasks[i]) {
        if(tasks[i][p] !== deletedTask[p]) {
          found = false
        }
      }
      if(found) index = i
    }
    tasks.splice(index, 1)
    this.setState({
      tasks: tasks
    })
  }

  setTimeBound(time, index) {
    if(index === 0) {
      this.setState({
        startTime: time
      })
    } else {
      this.setState({
        endTime: time
      })
    }
  }

  submit() {
    console.log("hi")
    console.log(this.state.tasks)
  }

  render() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <ObjectiveForm addTask={this.addNewTask} />
      <ObjectiveList tasks = {this.state.tasks} deleteTask={this.deleteTask} />
      <TimeBoundSection setTimeBound = {this.setTimeBound} />
      <FinishedSection submit = {this.submit} />
    </ScrollView>
  );
  }
}

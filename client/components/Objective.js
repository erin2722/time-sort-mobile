import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default class Objective extends Component {
    constructor(props) {
        super(props)
        
        this.deleteTask = this.deleteTask.bind(this)
    }

    deleteTask() {
        this.props.deleteTask(this.props.task)
    }
    render() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.description1}>{this.props.task.name} </Text> 
            <Text style = {styles.description2}>Deadline: {(this.props.task.date.getMonth() + 1) + "/" + 
            this.props.task.date.getDate() + " at " + this.props.task.date.getHours() + ":" + this.props.task.date.getMinutes()}</Text>
            <Icon name = "delete" size={20} onPress={this.deleteTask}></Icon>
         </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
      backgroundColor: "#f2f2f2",
      borderWidth: 1,
      borderColor: 'grey',
      paddingRight: 10
    },
    description1: {
        display: "flex",
        flexWrap: "wrap",
        fontWeight: "300",
        padding: 10,
        // marginTop: 10,
        // marginBottom: 10,
        borderRightWidth: 1,
        borderRightColor: 'black'
    },
    description2: {
        display: "flex",
        flexWrap: "wrap",
        fontWeight: "300",
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
    },
});
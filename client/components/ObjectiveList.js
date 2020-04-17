import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Objective from './Objective'

export default class ObjectiveList extends Component{
    constructor(props) {
        super(props)

        this.state = {
            tasks: this.props.tasks
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props !== prevProps) {
            this.setState({
                tasks: this.props.tasks
            }, () => {console.log(this.state.tasks)})
        }
    }

    render() {
        if(this.state.tasks.length === 0) {
            return (
                <View style = {styles.container}>
                    <Text style = {styles.label}>Here are all of the objectives you've entered so far.</Text>
                    <Text style = {styles.description}>No objectives tracked! Fill out the form above to start adding some!</Text>
                </View>
            );
        } else {
            return (
                <View style = {styles.container}>
                    <Text style = {styles.label}>Here are all of the objectives you've entered so far.</Text>
                    {this.state.tasks.map(task => (
                        <Objective task = {task} deleteTask={this.props.deleteTask} />
                    ))}
                </View>
            );
        }
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
});
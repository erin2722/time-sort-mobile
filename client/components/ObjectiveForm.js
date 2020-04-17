import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Platform, Switch } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RectButton } from 'react-native-gesture-handler';

export default class ObjectiveForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            date: new Date(),
            showDate: false,
            showTime: false,
            hours: '1',
            isEnabled: false
        }

        this.onChangeText = this.onChangeText.bind(this)
        this.onChange = this.onChange.bind(this)
        this.showDatepicker = this.showDatepicker.bind(this)
        this.showTimepicker = this.showTimepicker.bind(this)
        this.onChangeHours = this.onChangeHours.bind(this)
        this.toggleSwitch = this.toggleSwitch.bind(this)
        this.submit = this.submit.bind(this)
    }

    //function for name
    onChangeText(text) {
        this.setState({
            name: text
        })
    }

    //function for time pickers
    onChange(event, selectedDate) {
        const currentDate = selectedDate || this.state.date;
        this.setState({
            date: currentDate
        })
    };
 
    showDatepicker() {
        this.setState({
            showDate: !this.state.showDate
        })
    };
 
    showTimepicker() {
        this.setState({
            showTimepicker: !this.state.showTimepicker
        })
    };

    onChangeHours(text) {
        this.setState({
            hours: text
        })
    }

    //for toggle switch
    toggleSwitch() {
        this.setState({
            isEnabled: !this.state.isEnabled
        })
    }

    submit() {
        let task = {
            name: this.state.name,
            date: this.state.date,
            hours: this.state.hours,
            breakUp: this.state.isEnabled
        }

        this.setState({
            name: '',
            date: new Date(),
            showDate: false,
            showTime: false,
            hours: '1',
            isEnabled: false
        })

        this.props.addTask(task)
    }

    render() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.label}>Enter an Objective:</Text>
            <Text style = {styles.description}>Objective Title (This is what will show up on your calendar):</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => this.onChangeText(text)}
                value={this.state.name}
                placeholder = {"Eg. Read Chapter 4 in Physics Textbook..."}
                />
            <View>
                <RectButton style={styles.buttonStyle} onPress={this.showDatepicker}>
                    <View style={styles.dateButton}>
                        <Text style={styles.buttonText}>Choose the Due Date: {(this.state.date.getMonth() + 1) + "/" + this.state.date.getDate()}
                        </Text>
                    </View>
                </RectButton>
            </View>
            {this.state.showDate &&
            <DateTimePicker
                testID="dateTimePicker"
                value={this.state.date}
                mode={"date"}
                is24Hour={true}
                display="default"
                onChange={this.onChange}
            />
            }
            <View>
                <RectButton style={styles.buttonStyle} onPress={this.showTimepicker}>
                    <View style={styles.dateButton}>
                        <Text style={styles.buttonText}>Choose the Time Due: {this.state.date.getHours() + ":" + this.state.date.getMinutes()}</Text>
                    </View>
                </RectButton>
            </View>
            {this.state.showTime &&
            <DateTimePicker
                testID="dateTimePicker"
                value={this.state.date}
                mode={"time"}
                is24Hour={true}
                display="default"
                onChange={this.onChange}
            />
            }
            <View>
                <Text style = {styles.description}>How many hours do you think this objective will take? (defaults to 1 hour if left blank)</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.onChangeHours(text)}
                    value={this.state.hours}
                />
            </View>
            <View>
                <Text style={styles.description}>Break it up into smaller tasks?</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={this.state.isEnabled ? "#767577" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.toggleSwitch}
                    value={this.state.isEnabled}
                    style={styles.switch}
                />
            </View>
            <View>
                <RectButton style={styles.buttonStyle2} onPress={this.submit}>
                    <View style={styles.buttonStyle2}>
                        <Text style={styles.buttonText2}>+ Add Task</Text>
                    </View>
                </RectButton>
            </View>
      </View>
  );
        }
  }

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: "white",
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
        marginBottom: 15  
    },
    input: { 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        padding: 10,
        margin: 5
    },
    buttonStyle: {
        borderWidth: 1,
        borderColor: 'grey',
        margin: 5
    },
    dateButton: {
        height: 40, 
        padding: 10,
    },
    buttonText: {
        textAlign: "center"
    },     
    buttonStyle2: {
        borderRadius: 3,
        backgroundColor: "black",
        padding: 7,
        paddingRight: 10,
        width: 100,
    },
    buttonText2: {
        color: "white",
    },
    switch: {
        marginBottom: 10
    }
});
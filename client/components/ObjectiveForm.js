import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Platform, Switch } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function ObjectiveForm(props) {
    //name state
    const [name, setDescriptionText] = useState('');

    //time and date state
    const [date, setDate] = useState(new Date(1598051730000));
    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);

    //set hours state
    const [hours, setHours] = useState('1');

    //toggle state
    const [isEnabled, setIsEnabled] = useState(false);

    //function for name
    const onChangeText = (text) => {
        setDescriptionText(text)
    }

    //function for time pickers
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };
 
    const showDatepicker = () => {
        setShowDate(!showDate);
    };
 
    const showTimepicker = () => {
        setShowTime(!showTime);
    };

    //function for name
    const onChangeHours = (text) => {
        setHours(text)
    }

    //for toggle switch
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const submit = () => {
        let task = {
            name: name,
            date: date,
            hours: hours,
            breakUp: isEnabled
        }

        props.addTask(task)
    }


    return (
        <View style = {styles.container}>
            <Text style = {styles.label}>Enter an Objective:</Text>
            <Text style = {styles.description}>Objective Title (This is what will show up on your calendar):</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => onChangeText(text)}
                value={name}
                placeholder = {"Eg. Read Chapter 4 in Physics Textbook..."}
                />
            <View>
                <RectButton style={styles.buttonStyle} onPress={showDatepicker}>
                    <View style={styles.dateButton}>
                        <Text style={styles.buttonText}>Choose the Due Date: {(date.getMonth() + 1) + "/" + date.getDate()}
                        </Text>
                    </View>
                </RectButton>
            </View>
            {showDate &&
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
            }
            <View>
                <RectButton style={styles.buttonStyle} onPress={showTimepicker}>
                    <View style={styles.dateButton}>
                        <Text style={styles.buttonText}>Choose the Time Due: {date.getHours() + ":" + date.getMinutes()}</Text>
                    </View>
                </RectButton>
            </View>
            {showTime &&
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"time"}
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
            }
            <View>
                <Text style = {styles.description}>How many hours do you think this objective will take? (defaults to 1 hour if left blank)</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => onChangeHours(text)}
                    value={hours}
                />
            </View>
            <View>
                <Text style={styles.description}>Break it up into smaller tasks?</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={styles.switch}
                />
            </View>
            <View>
                <RectButton style={styles.buttonStyle2} onPress={submit}>
                    <View style={styles.buttonStyle2}>
                        <Text style={styles.buttonText2}>+ Add Task</Text>
                    </View>
                </RectButton>
            </View>
      </View>
  );
  }

const styles = StyleSheet.create({
    container: {
      display: "flex",
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
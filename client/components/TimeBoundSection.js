import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Platform, Switch } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function ObjectiveForm(props) {
    //time and date state
    const [date1, setDate1] = useState(new Date(1598051730000));
    const [date2, setDate2] = useState(new Date(1598051730000));
    const [showDate1, setShowDate1] = useState(false);
    const [showDate2, setShowDate2] = useState(false);

    //function for time pickers
    const onChange1 = (event, selectedDate) => {
        const currentDate = selectedDate || date1;
        setDate1(currentDate);
        props.setTimeBound(currentDate, 0)
    };

    const onChange2 = (event, selectedDate) => {
        const currentDate = selectedDate || date2;
        setDate2(currentDate);
        props.setTimeBound(currentDate, 1)
    };
 
    const showDatepicker1 = () => {
        setShowDate1(!showDate1);
    };
 
    const showDatepicker2 = () => {
        setShowDate2(!showDate2);
    };

    return (
        <View style = {styles.container}>
            <Text style = {styles.label}>Special Time Requirements</Text>
            <Text style = {styles.description}>By default, we will not schedule objectives before 7:00am or after 11:00pm. If you're okay with those constraints, leave these next two steps blank.</Text>
            <View>
                <RectButton style={styles.buttonStyle} onPress={showDatepicker1}>
                    <View style={styles.dateButton}>
                        <Text style={styles.buttonText}>No tasks before: {date1.getHours() + ":" + date1.getMinutes()}
                        </Text>
                    </View>
                </RectButton>
            </View>
            {showDate1 &&
            <DateTimePicker
                testID="dateTimePicker"
                value={date1}
                mode={"time"}
                is24Hour={true}
                display="default"
                onChange={onChange1}
            />
            }
            <View>
                <RectButton style={styles.buttonStyle} onPress={showDatepicker2}>
                    <View style={styles.dateButton}>
                        <Text style={styles.buttonText}>No tasks after: {date2.getHours() + ":" + date2.getMinutes()}</Text>
                    </View>
                </RectButton>
            </View>
            {showDate2 &&
            <DateTimePicker
                testID="dateTimePicker"
                value={date2}
                mode={"time"}
                is24Hour={true}
                display="default"
                onChange={onChange2}
            />
            }
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
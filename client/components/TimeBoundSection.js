import React, { Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RectButton } from 'react-native-gesture-handler';

export default class ObjectiveForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date1: new Date(),
            date2: new Date(),
            showDate1: false,
            showDate2: false
        }

        this.onChange1 = this.onChange1.bind(this)
        this.onChange2 = this.onChange2.bind(this)
        this.showDatepicker1 = this.showDatepicker1.bind(this)
        this.showDatepicker2 = this.showDatepicker2.bind(this)
    }

    //function for time pickers
    onChange1(event, selectedDate) {
        const currentDate = selectedDate || this.state.date1;
        this.setState({
            date1: currentDate
        })
        this.props.setTimeBound(currentDate, 0)
    };

    onChange2(event, selectedDate) {
        const currentDate = selectedDate || this.state.date2;
        this.setState({
            date2: currentDate
        })
        this.props.setTimeBound(currentDate, 1)
    };
 
    showDatepicker1() {
        console.log("ih")
        this.setState({
            showDatepicker1: !this.state.showDatepicker1
        })
    };
 
    showDatepicker2() {
        this.setState({
            showDatepicker2: !this.state.showDatepicker2
        })
    };
    render() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.label}>Special Time Requirements</Text>
            <Text style = {styles.description}>By default, we will not schedule objectives before 7:00am or after 11:00pm. 
            If you're okay with those constraints, leave these next two steps blank.</Text>
            <View>
                <RectButton style={styles.buttonStyle} onPress={this.showDatepicker1}>
                    <View style={styles.dateButton}>
                        <Text style={styles.buttonText}>No tasks before: {this.state.date1.getHours() + ":" 
                        + this.state.date1.getMinutes()}
                        </Text>
                    </View>
                </RectButton>
            </View>
            {this.state.showDatepicker1 &&
            <DateTimePicker
                testID="dateTimePicker"
                value={this.state.date1}
                mode={"time"}
                is24Hour={true}
                display="default"
                onChange={this.onChange1}
            />
            }
            <View>
                <RectButton style={styles.buttonStyle} onPress={this.showDatepicker2}>
                    <View style={styles.dateButton}>
                        <Text style={styles.buttonText}>No tasks after: 
                        {this.state.date2.getHours() + ":" + this.state.date2.getMinutes()}</Text>
                    </View>
                </RectButton>
            </View>
            {this.state.showDatepicker2 &&
            <DateTimePicker
                testID="dateTimePicker"
                value={this.state.date2}
                mode={"time"}
                is24Hour={true}
                display="default"
                onChange={this.onChange2}
            />
            }
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
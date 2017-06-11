import React from "react";
import { Text, View, StyleSheet } from "react-native";

const barHeight = 7;
const ProgressBar = ({progressLevel}) => {
    // As I don't know how many steps are necessary for the
    // onboraing process I will use this progressLevel prop
    // directly in the flex, based on the number of steps we
    // could easily calculate the necessary number in flex
    const completedBarStyle = (progressLevel) => {
        return {
                display: "flex",
                backgroundColor: "orange",
                height: barHeight,
                flex: progressLevel
        }
    }

    return(
        <View style={styles.bar}>
            <View style={completedBarStyle(progressLevel)}>
            </View>
            <View style={styles.incompleteBar}>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
   bar: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    incompleteBar: {
        display: "flex",
        backgroundColor: "#c6c6c6",
        height: barHeight,
        flex: 1
    }
});

export default ProgressBar;
import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

const NextButton = ({nextPage}) => {
    return(
        <View style={styles.container}>   
            <TouchableHighlight 
                    style={styles.nextButton}
                    underlayColor={"#cc801e"}
                    onPress={nextPage}>
                    <Text style={styles.btnText}>Nästa</Text>
                    </TouchableHighlight>
        </View>   
    );
}


const styles = StyleSheet.create({
  container: {
      alignItems: "center",
      justifyContent: "center",
      padding: 30
  },
  nextButton: {
        backgroundColor: "#f59b25",
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        width: 350,
        borderRadius: 10
    },
    btnText: {
        color: "white",
        fontWeight: "bold"
    }
});

export default NextButton;
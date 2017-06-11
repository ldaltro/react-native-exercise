import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const NextButton = ({nextPage}) => {
    return(
        <View style={styles.container}>   
            <TouchableOpacity style={styles.nextButton}
                    onPress={nextPage}>
                    <Text style={styles.btnText}>Nästa</Text>
                    </TouchableOpacity>
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
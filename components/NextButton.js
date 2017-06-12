import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

 
 const nextButtonStyle = (userPickedACategory) => {  
     return {
        backgroundColor: userPickedACategory ? "#f59b25" : "gray",
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        width: 350,
        borderRadius: 10
     }
}

const NextButton = ({nextPage, activeCategory}) => {
    const userPickedACategory = activeCategory !== "";
    return(
        <View style={styles.container}>   
            <TouchableHighlight 
                    style={nextButtonStyle(userPickedACategory)}
                    underlayColor={userPickedACategory ? "#cc801e" : "gray"}
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
    btnText: {
        color: "white",
        fontWeight: "bold"
    }
});

export default NextButton;
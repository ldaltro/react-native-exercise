import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
    return(
        <View style={styles.header}>
            <Text  style={styles.headerTxt}>Yeppa Taby</Text>
        </View>
    );
}


const styles = StyleSheet.create({
  header: {
        backgroundColor: "white",
        height: 80,
        borderColor: "gray",
        borderWidth: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
   headerTxt: {
       fontSize: 20,
       color: "gray"
   }
});

export default Header;
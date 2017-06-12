import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
    return(
        <Text style={styles.headerTxt}>Yeppa Taby</Text>
    );
}


const styles = StyleSheet.create({
   headerTxt: {
       fontSize: 20,
       color: "gray",
   }
});

export default Header;
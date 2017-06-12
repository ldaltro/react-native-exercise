import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const CategoryMenuItem = ({categoryName, onPress, activeCategory}) => {
    const itemStyle = () => {
        const backgroundColor = categoryName === activeCategory ? "#cc801e" : "#CCC";
        return {
            backgroundColor,
            margin: 10,
            width: 100,
            height: 100
        }
    }
    return(
        <View>    
        <TouchableOpacity style={itemStyle()}
                            onPress={() => onPress(categoryName)}>
            <Text >{categoryName}</Text>
        </TouchableOpacity>
        </View>  
    );
}


const styles = StyleSheet.create({
  item: {
        backgroundColor: '#CCC',
        margin: 10,
        width: 100,
        height: 100
    }
});

export default CategoryMenuItem;
import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

import SVGImage from "react-native-svg-image";

import SvgUri from 'react-native-svg-uri';

const CategoryMenuItem = ({categoryText, onPress, activeCategory}) => {
    const itemStyle = () => {
        const backgroundColor = categoryText === activeCategory ? "#cc801e" : "#CCC";
        return {
            backgroundColor,
            margin: 10,
            width: 100,
            height: 100
        }
    }
    return(
        <View>    
        <TouchableHighlight style={itemStyle()}
                            onPress={() => onPress(categoryText)}>
            <Text >{categoryText}</Text>
        </TouchableHighlight>
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
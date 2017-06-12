import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const pic = "Babysitting.png";

const CategoryMenuItem = ({categoryName, onPress, activeCategory}) => {
    const itemStyle = () => {
        const backgroundColor = categoryName === activeCategory ? "#ffbb47" : "white";
        return {
            backgroundColor,
            borderColor: "#afafaf",
            borderWidth: 0.3,
            marginBottom: 10,
            width: 130,
            height: 130,
            justifyContent: "center",
            alignItems: "center"
        }
    }

    const categoryImage = () => {
        switch(categoryName) {
            case "Babysitting":
             return require("../images/png/categories/Babysitting.png");
            case "Dog-Walking":
             return require("../images/png/categories/Dog-Walking.png");
            case "Event Helper":
             return require("../images/png/categories/Event Helper.png");
            case "Gardening":
             return require("../images/png/categories/Gardening.png");
            case "Homework":
             return require("../images/png/categories/Homework.png");
            case "It support":
             return require("../images/png/categories/It support.png");
            case "Misc":
             return require("../images/png/categories/Misc.png");
            case "Painting":
             return require("../images/png/categories/Painting.png");
            case "Sports or Music":
             return require("../images/png/categories/Sports or Music.png");
        }
        return "";
    }

    return(
        <View>
            <TouchableOpacity style={itemStyle()}
                                onPress={() => onPress(categoryName)}>
                <Image style={styles.image}
                source={categoryImage()}/>    
                <Text style={styles.categoryName}>{categoryName}</Text>
            </TouchableOpacity>
        </View>  
    );
}


const styles = StyleSheet.create({
  image: {
        marginBottom: 15,
    },
    categoryName: {
        color: "#555656",
        fontWeight: "bold",
    }
});

export default CategoryMenuItem;
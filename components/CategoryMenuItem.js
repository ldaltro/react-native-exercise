import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const CategoryMenuItem = ({categoryName, onPress, activeCategory}) => {
    isCategoryActive = categoryName === activeCategory;
    const itemStyle = () => {
        const backgroundColor = isCategoryActive ? "#ffbb47" : "white";
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

    const categoryNameStyle = () => {
        return {
        color: isCategoryActive ? "white" : "#555656",
        fontWeight: "bold",
        }
    }

    // Had to write this silly function because of the way React Native handles packages
    // more about that can be found here: https://github.com/facebook/react-native/issues/6391
    const categoryImage = () => {
        if(isCategoryActive) {
            switch(categoryName) {
                case "Babysitting":
                return require("../images/png/categories/Babysitting_active.png");
                case "Dog-Walking":
                return require("../images/png/categories/Dog-Walking_active.png");
                case "Event Helper":
                return require("../images/png/categories/Event Helper_active.png");
                case "Gardening":
                return require("../images/png/categories/Gardening_active.png");
                case "Homework":
                return require("../images/png/categories/Homework_active.png");
                case "It support":
                return require("../images/png/categories/It support_active.png");
                case "Misc":
                return require("../images/png/categories/Misc_active.png");
                case "Painting":
                return require("../images/png/categories/Painting_active.png");
                case "Sports or Music":
                return require("../images/png/categories/Sports or Music_active.png");
            }
        } else {
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
        }
        return "";
    }

    return(
        <View>
            <TouchableOpacity style={itemStyle()}
                              activeOpacity={1}
                              onPress={() => onPress(categoryName)}>
                <Image style={styles.image}
                source={categoryImage()}/>    
                <Text style={categoryNameStyle()}>{categoryName}</Text>
            </TouchableOpacity>
        </View>  
    );
}


const styles = StyleSheet.create({
  image: {
        marginBottom: 15,
    },
});

export default CategoryMenuItem;
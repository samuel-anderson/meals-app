import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'

const CategoryMealScreen = props => {

    const navigateFunc = () => {
        props.navigation.navigate({routeName: 'MealDetail'});
    }

    return (
        <View style={styles.screen}>
            <Text>Category Meal Screen</Text>
            <Button title="Go to meal details!" onPress={navigateFunc} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default CategoryMealScreen
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'

const CategoriesScreen = props => {
    //console.log(props);

    return (
        <View style={styles.screen}>
            <Text>Categories Screen</Text>
            <Button title="Go to meals!" onPress={()=>{
                props.navigation.navigate({routeName: 'CategoryMeals'})
                //props.navigation.push('CategoryMeals')
                // .replace('Screen') after user logs in
                //https://reactnavigation.org/docs/4.x/navigation-prop
            }} />
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

export default CategoriesScreen
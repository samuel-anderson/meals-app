import React from 'react';
import {View, Text, StyleSheet, Button, FlatList,TouchableOpacity, Platform} from 'react-native'
import { CATEGORIES} from '../data/dummy-data'
import Colors from '../constants/Colors'
const CategoriesScreen = props => {
    //console.log(props);

    const renderGridItem = (itemData) => {
        return (
        <TouchableOpacity  style={styles.gridItem} onPress={()=>{
            props.navigation.navigate('CategoryMeals')
        }}>
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
        )
    }
    return (
        // <View style={styles.screen}>
        //     <Text>Categories Screen</Text>
        //     <Button title="Go to meals!" onPress={()=>{
        //         props.navigation.navigate({routeName: 'CategoryMeals'})
        //         //props.navigation.push('CategoryMeals')
        //         // .replace('Screen') after user logs in
        //         //https://reactnavigation.org/docs/4.x/navigation-prop
        //     }} />
        // </View>

        <FlatList 
            keyExtractor={(item,index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />

    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    gridItem:{
        flex:1,
        margin:15,
        height: 150
    }
})

export default CategoriesScreen
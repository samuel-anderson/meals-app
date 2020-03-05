import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTile";
const CategoriesScreen = props => {
  //console.log(props);

  const renderGridItem = itemData => {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />
    );
  };
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
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      //numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;

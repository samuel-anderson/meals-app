import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  const navigateFunc = () => {
    props.navigation.navigate({
      routeName: "MealDetail",
      params: {}
    });
  };

  const renderMealItem = itemData => {
    return <MealItem data={itemData.item} onSelectMeal={navigateFunc} />;
  };
  return (
    <View style={styles.screen}>
      {/* <Text>Category Meal Screen</Text>
      <Button title="Go to details!" onPress={navigateFunc} />

      <Button
        title="Go Back!"
        onPress={() => {
          props.navigation.goBack(); //Or .pop()
        }}
      /> */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;

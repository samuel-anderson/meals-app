import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
const CategoryMealScreen = props => {
  const navigateFunc = () => {
    props.navigation.navigate({ routeName: "MealDetail" });
  };

  return (
    <View style={styles.screen}>
      <Text>Category Meal Screen</Text>
      <Button title="Go to details!" onPress={navigateFunc} />

      <Button
        title="Go Back!"
        onPress={() => {
          props.navigation.goBack(); //Or .pop()
        }}
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

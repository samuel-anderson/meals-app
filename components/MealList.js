import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { useSelector } from "react-redux";

const MealList = props => {
  const favoriteMeals = useSelector(state => state.mealsR.favoriteMeals);

  const renderMealItem = itemData => {
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);

    const navigateFunc = () => {
      props.navigation.navigate({
        routeName: "MealDetail",
        params: {
          mealId: itemData.item.id,
          mealTitle: itemData.item.title,
          isFav: isFavorite
        }
      });
    };

    return <MealItem data={itemData.item} onSelectMeal={navigateFunc} />;
  };

  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
});

export default MealList;

import { useLayoutEffect } from "react";
import MealList from "../components/reusableComponents/MealList";
import { CATEGORIES, MEALS } from "../dummy_data/dummy_data";

const MealOverview = ({ route, navigation }) => {
  // GETTING THE MEALS OF THE SELECTED CUISINE
  const mealsOfSelectedCuisine = MEALS.filter((meal) =>
    meal.categoryIds.includes(route.params.categoryId)
  );

  //   SETTING A SELECTED CUISINE NAME AS A HEADER
  //   useLayoutEffect PROVIDES A SMOOTH TRANSITION OF THE HEADER CHANGE
  useLayoutEffect(() => {
    const cuisineTitle = CATEGORIES.find(
      (category) => category.id === route.params.categoryId
    ).title;

    navigation.setOptions({ title: cuisineTitle });
  }, [route, navigation]);

  return <MealList items={mealsOfSelectedCuisine} navigation={navigation} />;
};

export default MealOverview;

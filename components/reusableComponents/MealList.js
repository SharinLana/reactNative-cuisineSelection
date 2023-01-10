// FUNCTION TRANSFERRED OUTSIDE THE COMPONENT FUNC

import { FlatList } from "react-native-gesture-handler";
import MealItem from "./MealItem";

// TRANSFERRED THE FUNCTION OUTSIDE OF THE COMPONENT FUNC
// TO AVOID ITS FREQUENT RE-RENDERING
const renderMeals = (itemData, navigation) => {
  const item = itemData.item;

  const mealObj = {
    id: item.id,
    title: item.title,
    affordability: item.affordability,
    complexity: item.complexity,
    imageUrl: item.imageUrl,
    duration: item.duration,
    ingredients: item.ingredients,
    steps: item.steps,
  };

  //  NAVIGATING USER TO THE SELECTED MEAL PAGE
  const goToRecipePageHandler = () => {
    // PASSING DATA TO BE RENDERED ON THE PAGE
    navigation.navigate("MealRecipe", { mealData: mealObj });
  };

  return <MealItem mealData={mealObj} onPress={goToRecipePageHandler} />;
};

const MealList = ({ items, navigation }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      // RENDERING THE MEALS VIA A FUNCTION
      renderItem={(itemData) => renderMeals(itemData, navigation)}
    />
  );
};

export default MealList;

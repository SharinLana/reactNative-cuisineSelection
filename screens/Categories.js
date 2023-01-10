import { FlatList } from "react-native";
import EachCategory from "../components/EachCategory";
import { CATEGORIES } from "../dummy_data/dummy_data";

// HANDLING EACH CATEGORY IN A SEPARATE FUNCTION
// TO AVOID ITS RE-RENDERING EACH TIME WHEN A STATE CHANGES
function renderEachCategory(itemData, navigation) {
  const item = itemData.item;

  // NAVIGATING TO THE MEAL OVERVIEW PAGE ON PRESS
  const goToMealOverviewPageHandler = () => {
    navigation.navigate("MealOverview", {
      // PASSING THE ID OF EACH CATEGORY TO THE MEAL OVERVIEW PAGE
      // TO BE ABLE TO FILTER THE MEALS CONNECTED TO THE SELECTED CATEGORY
      categoryId: item.id,
    });
  };

  return (
    <EachCategory
      title={item.title}
      color={item.color}
      id={item.id}
      onPress={goToMealOverviewPageHandler}
    />
  );
}

const Categories = ({ navigation }) => {
  return (
    // RENDERING MEAL CATEGORIES
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => renderEachCategory(itemData, navigation)}
      numColumns={2} // RENDERING CATEGORIES AS 2 COLUMNS
    />
  );
};

export default Categories;

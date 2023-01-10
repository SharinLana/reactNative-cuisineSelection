import MealIntro from "./MealIntro";

const MealItem = ({ mealData, onPress }) => {
  return <MealIntro mealData={mealData} onPress={onPress} />;
};

export default MealItem;

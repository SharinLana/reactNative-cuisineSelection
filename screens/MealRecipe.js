import { useLayoutEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../components/IconButton";
import MealIntro from "../components/reusableComponents/MealIntro";
import StepList from "../components/StepList";
import { addFavorite, removeFavorite } from "../store/favorites";

const MealRecipe = ({ route, navigation }) => {
  const favoriteMealIds = useSelector((state) => state.favorites.ids);
  const dispatch = useDispatch();

  // GETTING THE EACH MEAL DATA
  const mealInfo = route.params.mealData;

  // IMPLEMENTING THE "ADD/REMOVE FAVORITE" HEADER ICON BUTTON
  // Defining if the meal is already selected as favorite or not
  const isFavorite = favoriteMealIds.includes(mealInfo.id);

  // If the meal has been selected as favorite, then 'unfavor' it on press.
  // And vice versa.
  const markAsFavoriteHandler = () => {
    if (isFavorite) {
      dispatch(removeFavorite({ id: mealInfo.id }));
    } else {
      dispatch(addFavorite({ id: mealInfo.id }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            // render the icon conditionally
            name={isFavorite ? "heart" : "hearto"}
            color="white"
            onPress={markAsFavoriteHandler}
          />
        );
      },
    });
  }, [navigation, markAsFavoriteHandler]);

  return (
    <ScrollView>
      <MealIntro mealData={mealInfo} />

      {/* INGREDIENTS AND COOKING STEPS */}
      <View style={styles.recipeContainer}>
        <StepList data={mealInfo.ingredients} title="Ingredients:" />
        <StepList data={mealInfo.steps} title="Cooking Steps:" />
      </View>
    </ScrollView>
  );
};

export default MealRecipe;

const styles = StyleSheet.create({
  recipeContainer: {
    flex: 1,
    alignItems: "center",
  },
});

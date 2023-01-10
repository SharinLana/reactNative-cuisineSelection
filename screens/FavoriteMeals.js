import { Text, StyleSheet, View, Pressable } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/reusableComponents/MealList";
import { MEALS } from "../dummy_data/dummy_data";

const FavoriteMeals = ({ navigation }) => {
  // GETTING THE ARRAY OF THE FAVORITE MEAL IDS
  const favoriteMealIds = useSelector((state) => state.favorites.ids);

  //   SORTING THE FAVORITE MEALS OUT OF THE 'MEALS' DATA
  const favoriteMeals = MEALS.filter((meal) => {
    return favoriteMealIds.includes(meal.id);
  });

  // NAVIGATING TO THE "ALL CUISINES" SCREEN
  const startExploringBtnHandler = () => {
    navigation.navigate("AllCategories");
  };

  if (favoriteMealIds.length === 0) {
    return (
      <View>
        <Text style={styles.text}>You don't have favorite meals yet.</Text>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.buttonContainer,
            pressed ? styles.pressed : null,
          ]}
          onPress={startExploringBtnHandler}
        >
          <Text style={styles.btnText}>Start Exploring</Text>
        </Pressable>
      </View>
    );
  }

  return <MealList items={favoriteMeals} navigation={navigation} />;
};

export default FavoriteMeals;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    padding: 15,
    marginTop: 40,
    color: "#820000",
  },

  buttonContainer: {
    marginTop: 20,
    width: 180,
    backgroundColor: "#F7F5EB",
    alignSelf: "center",
    paddingVertical: 15,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#73777B",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },

  pressed: {
    opacity: 0.6,
  },

  btnText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "#A75D5D",
  },
});

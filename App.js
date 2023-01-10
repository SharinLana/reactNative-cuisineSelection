import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Categories from "./screens/Categories";
import MealOverview from "./screens/MealOverview";
import MealRecipe from "./screens/MealRecipe";
import FavoriteMeals from "./screens/FavoriteMeals";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#A75D5D" },
        headerTintColor: "#F7F5EB",
        drawerActiveBackgroundColor: "#A75D5D",
        drawerActiveTintColor: "#F7F5EB",
        drawerInactiveTintColor: "#F7F5EB",
        sceneContainerStyle: { backgroundColor: "#FFC3A1" },
        headerTitleStyle: { fontWeight: "700", fontSize: 20 },
        drawerContentStyle: { backgroundColor: "#F0997D" },
        drawerLabelStyle: { fontSize: 18 },
      }}
    >
      <Drawer.Screen
        name="AllCategories"
        component={Categories}
        options={{
          title: "All Cuisines",
          drawerIcon: ({ color }) => {
            return <Ionicons name="list" size={24} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteMeals}
        options={{
          title: "Favorite Meals",
          drawerIcon: ({ color }) => {
            return <AntDesign name="heart" size={20} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#A75D5D" },
              headerTintColor: "#F7F5EB",
              contentStyle: { backgroundColor: "#FFC3A1" },
              headerTitleStyle: { fontWeight: "700", fontSize: 20 },
            }}
          >
            {/* HOME  SCREEN */}
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />

            {/* MEAL OVERVIEW SCREEN */}
            <Stack.Screen name="MealOverview" component={MealOverview} />

            {/* MEAL RECIPE SCREEN */}
            <Stack.Screen
              name="MealRecipe"
              component={MealRecipe}
              options={{
                title: "Recipe",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

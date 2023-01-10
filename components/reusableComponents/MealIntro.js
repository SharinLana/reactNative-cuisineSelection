import { Pressable, View, Text, StyleSheet, Image } from "react-native";

const MealIntro = ({mealData, onPress}) => {
    return (
        <View style={styles.mainContainer}>
          <Pressable
            android_ripple={{ color: "#F7F5EB" }}
            style={({ pressed }) => [
              styles.pressable,
              pressed ? styles.pressed : null,
            ]}
            onPress={onPress}
          >
            <View>
              <Image source={{ uri: mealData.imageUrl }} style={styles.image} />
              <View style={styles.innerContainer}>
                <Text style={styles.title}>{mealData.title}</Text>
                <View style={styles.infoContainer}>
                  <Text style={styles.infoText}>
                    <Text style={styles.span}>Cooking time:</Text>{" "}
                    {mealData.duration} min
                  </Text>
                  <Text style={styles.infoText}>
                    <Text style={styles.span}>Affordability:</Text>{" "}
                    {mealData.affordability}
                  </Text>
                  <Text style={styles.infoText}>
                    <Text style={styles.span}>Complexity:</Text>{" "}
                    {mealData.complexity}
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      );
}

export default MealIntro;

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      margin: 20,
      backgroundColor: "#F7F5EB",
      borderRadius: 8,
      elevation: 4,
      shadowColor: "grey",
      shadowOpacity: 0.5,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 8,
    },
  
    pressable: {
      flex: 1,
    },
  
    pressed: {
      opacity: 0.8,
    },
  
    image: {
      width: "100%",
      height: 200,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
  
    innerContainer: {
      alignItems: "center",
      margin: 15,
    },
  
    title: {
      fontSize: 20,
      paddingHorizontal: 15,
      textAlign: "center",
      fontWeight: "700",
    },
  
    infoContainer: {
      marginTop: 5,
    },
  
    infoText: {
      fontSize: 16,
      margin: 2,
    },
  
    span: {
      fontWeight: "500",
    },
  });
  
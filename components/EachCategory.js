import { Pressable, View, Text, StyleSheet } from "react-native";

const EachCategory = ({ title, color, onPress }) => {
  return (
    <View style={styles.mainContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.iOSPressed : null,
        ]}
        onPress={onPress}
      >
        {/* APPLYING BACKGROUND COLOR FROM DUMMY DATA TO EACH CATEGORY */}
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default EachCategory;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: 100,
    height: 130,
    margin: 15,
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

  iOSPressed: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  text: {
    fontSize: 20,
    fontWeight: "500",
  },
});

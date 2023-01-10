import { View, Text, StyleSheet } from "react-native";

const StepList = ({ data, title }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {data.map((item, index) => {
        return (
          <View key={index} style={styles.textContainer}>
            <Text style={styles.text}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default StepList;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },

  titleContainer: {
    width: "80%",
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#D3756B",
    borderRadius: 5,
  },

  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "#F7F5EB",
  },

  textContainer: {
    width: "80%",
    backgroundColor: "#F7F5EB",
    margin: 3,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  text: {
    fontSize: 16,
  },
});

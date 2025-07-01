import { View, Text, StyleSheet } from "react-native";

const ScreenTitle = ({ children }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
};

export default ScreenTitle;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titleText: {
    color: "#1e3a8a",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
});
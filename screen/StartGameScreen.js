import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../component/PrimaryButton";
import ScreenTitle from "../component/ScreenTitle";

const StartGameScreen = ({ userNumber, setUserNumber, step, setStep }) => {
  return (
    <View style={styles.rootContainer}>
      <LinearGradient
        colors={["#e0e7ff", "#c7d2fe", "#a5b4fc"]}
        style={styles.gradient}
      >
        <ImageBackground
          source={{ uri: "https://legacy.reactjs.org/logo-og.png" }}
          style={styles.background}
          imageStyle={styles.backgroundImage}
        >
          <ScreenTitle>Guess The Number</ScreenTitle>
          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="number-pad"
              maxLength={2}
              style={styles.textInputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => setUserNumber(Number(text))}
              value={userNumber ? userNumber.toString() : ""}
              placeholder="Enter a number"
            />
            <View style={styles.buttonContainer}>
              <PrimaryButton
                onPressFunction={() => {
                  setUserNumber(null);
                }}
              >
                <View style={styles.btnContent}>
                  <Text style={styles.btnText}>Reset</Text>
                  <Ionicons name="reload" size={18} color="#ffffff" />
                </View>
              </PrimaryButton>
              <PrimaryButton
                onPressFunction={() => {
                  if (!userNumber || userNumber < 1 || userNumber > 99) {
                    Alert.alert(
                      "Invalid Input",
                      "Please enter a number between 1 and 99",
                      [{ text: "OK" }]
                    );
                  } else {
                    setStep(2);
                  }
                }}
              >
                <View style={styles.btnContent}>
                  <Text style={styles.btnText}>Confirm</Text>
                  <Ionicons name="checkmark" size={18} color="#ffffff" />
                </View>
              </PrimaryButton>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
  },
  inputContainer: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  textInputStyle: {
    width: 100,
    color: "#1e3a8a",
    fontWeight: "600",
    fontSize: 24,
    marginVertical: 20,
    borderBottomColor: "#1e3a8a",
    borderBottomWidth: 2,
    textAlign: "center",
    paddingVertical: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 10,
  },
  btnContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
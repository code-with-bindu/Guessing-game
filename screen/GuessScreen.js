import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../component/PrimaryButton";
import ScreenTitle from "../component/ScreenTitle";

const GuessScreen = ({ userNumber, setStep }) => {
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(100);
  const [guess, setGuess] = useState(null);

  function guessTheNumber() {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  useEffect(() => {
    const newGuess = guessTheNumber();
    setGuess(newGuess);
  }, [minValue, maxValue]);

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
          <ScreenTitle>Opponent's Guess</ScreenTitle>
          <View style={styles.inputContainer}>
            <Text style={styles.guessText}>{guess}</Text>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                onPressFunction={() => {
                  if (userNumber < guess) {
                    setMaxValue(guess - 1);
                  } else if (userNumber === guess) {
                    Alert.alert("Correct Guess!", "You won the game!", [
                      { text: "OK", onPress: () => setStep(1) },
                    ]);
                  } else {
                    Alert.alert("Incorrect!", "Please provide a valid hint.");
                  }
                }}
              >
                <View style={styles.btnContent}>
                  <Text style={styles.btnText}>Lower</Text>
                  <Ionicons name="arrow-down" size={20} color="#ffffff" />
                </View>
              </PrimaryButton>
              <PrimaryButton
                onPressFunction={() => {
                  if (userNumber > guess) {
                    setMinValue(guess + 1);
                  } else if (userNumber === guess) {
                    Alert.alert("Correct Guess!", "You won the game!", [
                      { text: "OK", onPress: () => setStep(1) },
                    ]);
                  } else {
                    Alert.alert("Incorrect!", "Please provide a valid hint.");
                  }
                }}
              >
                <View style={styles.btnContent}>
                  <Text style={styles.btnText}>Higher</Text>
                  <Ionicons name="arrow-up" size={20} color="#ffffff" />
                </View>
              </PrimaryButton>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default GuessScreen;

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
  guessText: {
    fontSize: 36,
    fontWeight: "700",
    color: "#1e3a8a",
    marginVertical: 20,
    textAlign: "center",
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
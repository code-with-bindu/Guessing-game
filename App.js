import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import StartGameScreen from "./screen/StartGameScreen";
import GuessScreen from "./screen/GuessScreen";

export default function App() {
  const [step, setStep] = useState(1);
  const [userNumber, setUserNumber] = useState(null);

  return (
    <>
      {step === 1 && (
        <StartGameScreen
          userNumber={userNumber}
          setUserNumber={setUserNumber}
          step={step}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <GuessScreen
          userNumber={userNumber}
          setStep={setStep}
        />
      )}
      <StatusBar hidden />
    </>
  );
}

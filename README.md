# Number Guessing Game

A sleek and interactive number guessing game built with **React Native** and **Expo**. The app allows users to input a number between 1 and 99, and the computer attempts to guess it by suggesting numbers. Users provide hints ("Higher" or "Lower") to guide the computer until it guesses correctly. The app features a modern, professional UI with smooth gradients, intuitive controls, and responsive design.

## Features
- **Input Screen**: Users enter a number (1-99) and confirm or reset their choice.
- **Guess Screen**: The computer guesses a number, and users provide hints using "Higher" or "Lower" buttons.
- **Professional UI**: Clean design with subtle shadows, rounded corners, and a calming gradient background.
- **Responsive Layout**: Optimized for various mobile screen sizes.
- **Interactive Feedback**: Alerts for invalid inputs and game outcomes.


## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- A mobile device or emulator with the [Expo Go](https://expo.dev/client) app

### Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/number-guessing-game.git
   cd number-guessing-game
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Expo Development Server**
   ```bash
   npx expo start
   ```

4. **Run the App**
   - Open the **Expo Go** app on your mobile device.
   - Scan the QR code displayed in the terminal or browser.
   - Alternatively, run on an emulator (e.g., Android Studio or Xcode).

## Download
You can download the README file for offline reference here:  
[Download README.md](https://raw.githubusercontent.com/your-username/number-guessing-game/main/README.md)

## Project Structure
```
number-guessing-game/
├── component/
│   ├── PrimaryButton.js    # Reusable button component
│   ├── ScreenTitle.js     # Reusable title component
├── screen/
│   ├── GuessScreen.js     # Screen for the computer's guessing logic
│   ├── StartGameScreen.js # Screen for user input
├── App.js                 # Main app entry point
├── README.md              # Project documentation
├── package.json           # Project dependencies and scripts
```

## Dependencies
- `react-native`: Core framework for building the app
- `expo`: Simplifies development and deployment
- `expo-linear-gradient`: For gradient backgrounds
- `@expo/vector-icons`: For icons in buttons
- See `package.json` for the full list of dependencies.

## Usage
1. **Start Screen**:
   - Enter a number between 1 and 99.
   - Press "Confirm" to proceed or "Reset" to clear the input.
   - If the input is invalid, an alert will prompt for a valid number.

2. **Guess Screen**:
   - The computer guesses a number.
   - Press "Higher" if your number is larger, or "Lower" if it's smaller.
   - If the computer guesses correctly, an alert congratulates you, and the game resets.

3. **Game Flow**:
   - The app uses a binary search-like approach to narrow down the guess range.
   - The UI provides visual feedback with alerts and a clean design.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code follows the existing style and includes appropriate tests.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Built with [React Native](https://reactnative.dev/) and [Expo](https://expo.dev/).
- Inspired by simple number guessing games with a focus on modern UI design.

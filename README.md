
# 🐷 Pig Game


## Overview

The Pig Game is a fun and simple dice game built with js and styled with CSS. 🎨 In this game, two players compete to reach 100 points by rolling dice and accumulating scores. The first player to reach 100 points wins! 🏆 This project showcases the use of React's `useReducer` hook for managing complex state logic.

## Features

- **Player Turn Management:** Alternates between two players. 🔄
- **Rolling Dice:** Roll a dice and add the rolled number to the current player's score unless a 1 is rolled. 🎲
- **Holding Score:** Add the current score to the player's total score and switch turns. 📥
- **Game Reset:** Start a new game and reset all scores and game state. 🔄
- **Game Over:** Disable actions when a player reaches 100 points. 🚫

## Technologies Used

- **CSS:** For styling the game components. 🎨
- **WebFonts:** For icons. 📁
- **JavaScript:** For game logic and interaction. 💻
  
  ## Project Structure 

- `index.html`: The main HTML file.
- `CSS/style.css`: The CSS file for styling the game.
- `CSS/mediaQuery.css`: Making the game responsive to all screens.
- `JS/script.js`: The JavaScript file containing the game logic.

## Installation

To get started with the Pig Game project, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Abdelrahman-Adel610/Pig-game.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd Pig-Game
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Development Server:**

   ```bash
   npm start
   ```

## Usage

- **Roll Dice:** Click the "🎲 Roll dice" button to roll the dice and add the result to the current player's score. If a 1 is rolled, the current score is reset, and the turn switches to the other player. 🔄
- **Hold Score:** Click the "📥 Hold" button to add the current score to the player's total score and switch turns. 📈
- **New Game:** Click the "🔄 New game" button to reset the game and start a new session. 🎉

## Contributing

If you'd like to contribute to the Pig Game project, please follow these guidelines:

1. **Fork the Repository:** 🍴
   Click the "Fork" button at the top right of the repository page.

2. **Create a Feature Branch:** 🌱

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Commit Your Changes:** 💾

   ```bash
   git commit -am 'Add new feature'
   ```

4. **Push to the Branch:** ⬆️

   ```bash
   git push origin feature/your-feature
   ```

5. **Create a Pull Request:** 🔄
   Go to the repository on GitHub and create a pull request.

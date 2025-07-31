# Continue Autocomplete Indicator

This is a **lightweight Visual Studio Code extension** that adds a simple status bar indicator showing whether **Continue's autocomplete feature** is currently enabled or disabled.

## ✨ Features

- Displays a ⚡ **ON/OFF** indicator in the VS Code status bar for Continue autocomplete.
- Click the indicator to toggle Continue autocomplete on or off instantly.
- Helps you quickly confirm the current state, avoiding confusion when autocomplete suggestions are missing.

## 🛠️ Requirements

- [Continue](https://marketplace.visualstudio.com/items?itemName=Continue.continue) extension installed in VS Code.
- A working Continue configuration with autocomplete enabled for at least one model.

## 🚀 Usage

1. Install this extension in VS Code (run in Extension Development Host or package it into a `.vsix` file). A `.vsix` file is included in this repository if you don't want to build it yourself.
2. Ensure Continue is installed and configured correctly. If the VS Code CLI is on your path, the fastest way to do this is to type `code --install-extension continue-autocomplete-indicator-0.0.1.vsix` at the command line.
3. Look for the status bar indicator:
   - **⚡ Continue: ON** – autocomplete is active.
   - **⚡ Continue: OFF** – autocomplete is disabled.
4. Click the indicator to toggle the state.

## 🔧 Development

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/continue-autocomplete-indicator.git
   ```
2. Initialize the extension development environment by running `npm install`:
   ```bash
   npm install
   ```
3. Package the extension using `vsce package`:
   ```bash
   npx vsce package
   ```
4. Install the extension using the VS Code CLI (replacing `<newly-generated-extension-name>` with the actual name of your packaged `.vsix` file):
   ```bash
   code --install-extension <newly-generated-extension-name>.vsix
   ```
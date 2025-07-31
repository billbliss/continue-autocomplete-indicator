const vscode = require("vscode");

let isEnabled = true; // default ON
let statusBarItem;

function updateStatusBar() {
  if (statusBarItem) {
    statusBarItem.text = isEnabled ? "⚡ Continue: ON" : "⚡ Continue: OFF";
    statusBarItem.tooltip = "Click to toggle Continue autocomplete";
    statusBarItem.show();
  }
}

function activate(context) {
  statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBarItem.command = "extension.toggleContinueAutocomplete";
  context.subscriptions.push(statusBarItem);

  // Command to toggle the state
  let disposable = vscode.commands.registerCommand(
    "extension.toggleContinueAutocomplete",
    function () {
      isEnabled = !isEnabled;
      // Call Continue's built-in toggle
      vscode.commands.executeCommand("continue.toggleAutocomplete");
      updateStatusBar();
    }
  );

  context.subscriptions.push(disposable);

  // Show status bar item on startup
  updateStatusBar();
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
const vscode = require('vscode');

// Creating a new problem
async function newProblem() {
	// Problem name
	const problemName = vscode.window.createInputBox()
	problemName.step = 1
	problemName.totalSteps = 2
	problemName.title = "Type the problem's name"

	problemName.show()

}

function activate(context) {
	console.log('Code Judge is enabled!');

	// Registering commands
	context.subscriptions.push(
		vscode.commands.registerCommand('code-judge.newProblem', newProblem));
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}

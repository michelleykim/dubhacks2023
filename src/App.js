import logo from "./logo.svg";
import "./App.css";
import openai from './utilities/openai';

function App() {
	const test = async () => {
		const chatCompletion = await openai.chat.completions.create({
		messages: [{ role: 'user', content: 'Say this is a test' }],
		model: 'gpt-3.5-turbo',
		});
	
		alert(chatCompletion.choices);
	}
	
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<button onClick={test}>
					Test OpenAI
				</button>
			</header>
		</div>
	);
}

export default App;

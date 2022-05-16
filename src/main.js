import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		// dataFile: "./data/sardinia-quiz.json",
		initialCredits: 100
	}
});

export default app;
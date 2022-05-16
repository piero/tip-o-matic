<script>
	export let initialCredits;
	// export let dataFile;
	let currentQuestionId = 0;

	import * as quizData from "./data/sardinia-quiz.json";
	import QuestionPage from "./components/QuestionPage.svelte";
	import CreditsCounter from "./components/CreditsCounter.svelte";

	function showQuestion(question) {
		new QuestionPage((question = { question }));
	}

	function handleRequestNextQuestion(event) {
		if (event.detail.direction === "next") {
			currentQuestionId++;
		} else if (event.detail.direction === "previous"){
			currentQuestionId--;
		} else {
			console.error("Unknown direction:", event.detail.direction);
		}
	}
	
</script>

<main>
	<h1>{quizData.title}</h1>

	<CreditsCounter remainingCredits={initialCredits} />

	{#if (quizData.questions.length > 0)}
	<QuestionPage
		question={quizData.questions[currentQuestionId]}
		lastQuestionId={quizData.questions.length}
		on:message={handleRequestNextQuestion}
	/>
	{/if}

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

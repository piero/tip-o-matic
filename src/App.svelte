<script>
	export let initialCredits;
	export let dataFile;

	import * as quizData from "./data/sardinia-quiz.json"
	import QuestionPage from "./components/QuestionPage.svelte";
	import Credits from "./components/Credits.svelte";
	

	function showQuestion(question) {
		new QuestionPage(question={question})
	}

</script>

<main>
	<h1>{quizData.title}</h1>


	<Credits remainingCredits={initialCredits} />


	<!-- {#each quizData.questions as question}
	<button on:click={showQuestion(question)}>
	Push me
	</button>
	{/each} -->
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

<script>
    export let question;
</script>

<h1>Question {question.id}</h1>
<p>{question.text}</p>

<ol>
    {#each question.answers as answer}
    <li>{answer.text}</li>
    {/each}
</ol>

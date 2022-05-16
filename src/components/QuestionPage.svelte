<script>
    export let question;
    export let lastQuestionId;

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function requestQuestion(currentId, direction) {
        dispatch('message', {
            direction: direction,
        });
    }

</script>

<h1>Question {question.id} / {lastQuestionId}</h1>
<p>{question.text}</p>

<ol>
    {#each question.answers as answer}
    <li>{answer.text}</li>
    {/each}
</ol>


{#if (question.id > 1)}
<button on:click={requestQuestion(question.id, 'previous')}>
    Previous question
</button>
{/if}

{#if (question.id < lastQuestionId)}
<button on:click={requestQuestion(question.id, 'next')}>
    Next question
</button>
{/if}

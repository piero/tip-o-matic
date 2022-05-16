<script>
    import Bid from "./Bid.svelte";

    export let remainingCredits;

    function subtractCredits(amount) {
        remainingCredits -= amount;
        if (remainingCredits < 0) {
            remainingCredits = 0;
        }
    }

    function hasCredits() {
        return remainingCredits > 0;
    }

    
	function handleOfferMessage(event) {
		console.log('Handling Offer Message:' + event.detail.value);
		if (hasCredits()) {
            subtractCredits(event.detail.value);
        }
	}

</script>

<div class="creditsBox">
	{remainingCredits} Cloud Coins left
</div>
<div>
    <Bid maxValue={remainingCredits} on:message={handleOfferMessage}/>
</div>

<style>
	.creditsBox {
		width: 300px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0 0 1em 0;
	}
</style>

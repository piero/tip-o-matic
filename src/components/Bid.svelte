<script>
    import Slider from '@bulatdashiev/svelte-slider';

    export let maxValue;
    let value = [0,maxValue];

    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();

    function makeOffer(currentValue) {
		dispatch('message', {
			value: currentValue[0]
		});
	}

</script>


<Slider min=0 max={maxValue} step=1 bind:value/>

<button on:click={makeOffer(value)}>
    Offer {value[0] || "0"} Cloud Coins
</button>


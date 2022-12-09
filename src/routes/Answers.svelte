<script>
	import { createEventDispatcher } from 'svelte';

	import {current, best} from '../stores/streak.js';

	export let answer;
	export let gameNames;

	const dispatch = createEventDispatcher();

	let guesses = 0;

	function guess() {
		if (this.textContent === answer) {
			this.classList.add('bg-green-500', 'text-white');
			if (!guesses) $current = $current + 1;
			if ($current > $best) $best = $current;
			dispatch('guessed');
		} else {
			$current = 0
			guesses++;
			this.classList.add('bg-red-500', 'text-white');
		}
	}
</script>

<div class="bg-white">
	<div class="list-none text-center">
		{#each gameNames as name}
			<button
				on:click={guess}
				class="list-none py-3 hover:border-gray-700 border-2 w-[100%] h-[100%]">{name}</button
			>
		{/each}
	</div>
</div>

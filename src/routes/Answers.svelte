<script>
	import { createEventDispatcher } from 'svelte';
	
    export let answer;
	export let gameNames;

	const dispatch = createEventDispatcher();

	function guess() {
        parent = this.parentElement;
		if (this.textContent === answer) {
			parent.classList.add('bg-green-500', 'text-white');
            dispatch("guessed")
		} else {
			parent.classList.add('bg-red-500', 'text-white');
		}
	}
</script>

<div class="bg-white">
	<div class="list-none text-center">
		{#each gameNames as name}
			<li class="py-3 hover:border-gray-700 border-2">
				<button
					on:click={guess}
					class="list-none">{name}</button
				>
			</li>
		{/each}
	</div>
</div>

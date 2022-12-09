<script>
	import { createEventDispatcher } from 'svelte';
	
    export let answer;
	export let gameNames;

	const dispatch = createEventDispatcher();

	function guess() {
        parent = this.parentElement
		if (this.textContent === answer) {
			parent.classList.add('bg-green-500');
            dispatch("guessed")
		} else {
			parent.classList.add('bg-red-500');
		}
	}
</script>

<div class="bg-white rounded-md">
	<div class="bg-white rounded-md list-none text-center">
		{#each gameNames as name}
			<li class="py-3 border-b-2">
				<button
					on:click={guess}
					class="list-none hover:text-indigo-600">{name}</button
				>
			</li>
		{/each}
	</div>
</div>

<script>
	export let data;

	function guess() {
		console.log(this.textContent);
		if (this.textContent === data.answer) {
			this.classList.add('right');
		} else {
			this.classList.add('wrong');
		}
	}
</script>

<div class="container">
	<img class="snapshot" src={data.snapshot} alt="Game pic" />

	<div class="answers">
		{#each data.gameNames as name}
			<button on:click={guess} class:wrong={false} class:right={false}>{name}</button>
		{/each}
	</div>
</div>

<style>
    :global(body) {
        background-color: darkslategrey;
    }

	div.container {
		margin: 1em;
		display: grid;
		grid-template-columns: auto auto;
        gap: 1em;
	}

	div.answers {
		grid-column-start: 2;
		grid-column-end: 2;
	}

	img.snapshot {
		grid-column-start: 1;
		grid-column-end: 1;
        width: 100%
	}

	button {
		display: block;
		padding: 0.5em;
		margin-bottom: 0.3em;
		font-size: large;
		width: 100%;
	}

	button.wrong {
		background-color: red;
	}

	button.right {
		background-color: green;
	}
</style>

<script>
	export let data;

	function guess() {
		if (this.textContent === data.answer) {
			this.classList.add('right');
            showPlayAgain = true;
		} else {
			this.classList.add('wrong');
		}
	}

    let showPlayAgain = false;
</script>

<div class="container">
	<div class="title">
		<h3>From which game is this picture?</h3>
	</div>

	<div class="image">
		<img class="snapshot" src={data.snapshot} alt="Game pic" />
	</div>

	<div class="answers">
		{#each data.gameNames as name}
			<button on:click={guess} class:wrong={false} class:right={false}>{name}</button>
		{/each}
        {#if showPlayAgain}
            <br>
            <hr>
            <button on:click={() => location.reload(true)}>WELL DONE! PLAY AGAIN?</button>
        {/if}
	</div>
</div>

<style>
	:global(body) {
		background-color: darkslategrey;
	}

	div.container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr 10fr;
		grid-column-gap: 5px;
		grid-row-gap: 5px;
	}

	div.title {
		grid-area: 1 / 1 / 2 / 2;
		color: white;
	}

	div.image {
		grid-area: 2 / 1 / 3 / 2;
	}

	div.image img {
		max-width: 70vw;
	}

	div.answers {
		grid-area: 2 / 2 / 3 / 3;
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

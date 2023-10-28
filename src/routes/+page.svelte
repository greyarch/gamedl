<script>
	import Header from './Header.svelte';
	import Answers from './Answers.svelte';
	import PlayAgain from './PlayAgain.svelte';
	import Snapshot from './Snapshot.svelte';

	export let data;

	let showPlayAgain = false;
</script>

<Header />

<main>
	<section>
		<div
			class="bg-gray-200 sm:grid grid-cols-4 grid-rows-1 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4"
		>
			{#await data.streamed.snapshot}
				<div class="col-span-3">Loading...</div>
			{:then snapshot}
				<Snapshot image={snapshot} />
			{/await}

			<div class="h-96 col-span-1">
				<Answers
					on:guessed={() => (showPlayAgain = true)}
					answer={data.answer}
					gameNames={data.gameNames}
				/>
				{#if showPlayAgain}
					<br />
					<hr />
					<PlayAgain />
				{/if}
				<div class="mb-2" />
			</div>
		</div>
	</section>
</main>

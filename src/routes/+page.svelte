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
			<Snapshot image={data.snapshot} />
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
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0312355607953387"
					crossorigin="anonymous"
				></script>
				<!-- side-right -->
				<ins
					class="adsbygoogle"
					style="display:block"
					data-ad-client="ca-pub-0312355607953387"
					data-ad-slot="2289431070"
					data-ad-format="auto"
					data-full-width-responsive="true"
				/>
				<script>
					(adsbygoogle = window.adsbygoogle || []).push({});
				</script>
			</div>
		</div>
	</section>
</main>

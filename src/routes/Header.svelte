<script>
	import { current, best } from '../stores/streak.js';
</script>

<header>
	<nav class="shadow">
		<div class="flex justify-between items-center py-2 px-10 container mx-auto">
			<h1
				class="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer"
			>
				Guess the Game!
			</h1>
			<h1 class="flex items-center text-xl">
				Your streak: {$current} / {$best}
			</h1>
		</div>
	</nav>
</header>

<script>
	import { current, best } from '../stores/streak.js';
</script>

<header>
	<nav class="shadow">
		<div class="flex justify-between items-center py-2 px-10 container mx-auto">
			<div>
				<h1
					class="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer"
				>
					Guess the Game!
				</h1>
			</div>
			<div>
				<div class="hover:cursor-pointer sm:hidden">
					<spnan
						class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"
					/>
					<spnan
						class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"
					/>
					<spnan
						class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"
					/>
				</div>
				<div class="flex items-center">
					<h1 class="sm:flex text-xl space-x-4 hidden items-center">
						Your streak: {$current} / {$best}
					</h1>
				</div>
			</div>
		</div>
	</nav>
</header>

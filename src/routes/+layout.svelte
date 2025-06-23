<script lang="ts">
	import 'beercss/dist/cdn/beer.min.css'
	import 'beercss/dist/cdn/beer.min.js'
	import '../app.css'
	import { onMount } from 'svelte';

	import { typewriter } from '../transitions/typewriter';

	let name = $state("");
	onMount(() => {
		name = "Jeff Candell";
	});	
	let { children } = $props();
</script>



<main class="responsive">
	<nav class="center-align">
		{#key name}
			<h4 in:typewriter = {{}}>{name}</h4>
		{/key}
		<div class="max"></div>
		<a href="#experiences">
			<button class="border small-elevate">Experiences</button>
		</a>
	</nav>
	{@render children()}
</main>

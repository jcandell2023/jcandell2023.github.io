<script lang="ts">
	// import 'beercss/dist/cdn/beer.min.css';
	import '../app.css';

	let { children } = $props();

	function scrollToId(id: string) {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}
</script>

<nav class="top center-align secondary-container small-elevate large-space">
	<button
		onclick={() => {
			scrollToId('about-me');
		}}>About Me</button
	>
	<button
		onclick={() => {
			scrollToId('experiences');
		}}>Experiences</button
	>
</nav>

<main class="responsive">
	{@render children()}
</main>

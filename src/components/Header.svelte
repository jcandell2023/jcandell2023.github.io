<script lang="ts">
	import { onMount } from 'svelte';
	import { typewriter } from '../transitions/typewriter';

	let name = $state('');
	onMount(() => {
		name = 'Jeff Candell';
	});
</script>

<div class="header-container">
	{#key name}
		<h1 class="" in:typewriter={{}}>{name}</h1>
	{/key}
	<div class="">
		<a href="https://github.com/jcandell2023">
			<picture>
				<source media="(prefers-color-scheme: dark)" srcset="./images/github-mark-white.svg" />
				<source media="(prefers-color-scheme: light)" srcset="./images/github-mark.svg" />
				<img src="./images/github-mark.svg" alt="Github Logo" class="responsive" />
			</picture>
			<span>Github</span>
		</a>
		<a href="https://www.linkedin.com/in/jeffcandell/">
			<picture>
				<source media="(prefers-color-scheme: dark)" srcset="./images/InBug-White.png" />
				<source media="(prefers-color-scheme: light)" srcset="./images/InBug-Black.png" />
				<img src="./images/InBug-Black.png" alt="LinkedIn Logo" class="responsive" />
			</picture>
			<span>LinkedIn</span>
		</a>
	</div>
</div>

<style lang="css">
	a:hover {
		text-decoration: underline;
	}
	picture {
		width: 1.5rem;
	}
	span {
		font-size: 1.5rem;
	}
	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
	}
	@media (max-width: 650px) {
		.header-container {
			flex-direction: column;
		}
	}
</style>

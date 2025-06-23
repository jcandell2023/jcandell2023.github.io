<script lang="ts">
	import Experience from './Experience.svelte';
	import { siteData } from '../data';
</script>

<div class="grid" id="experiences">
	{#each siteData.experiences as experience (experience.name)}
		<Experience {experience} />
	{/each}
</div>

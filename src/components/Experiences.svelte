<script lang="ts">
	import Experience from './Experience.svelte';
	import { siteData } from '../data';
</script>

<h2 id="experiences">Technical Experience</h2>
<div class="grid">
	{#each siteData.experiences.technical as experience (experience.name)}
		<Experience {experience} />
	{/each}
</div>
<h2>Personal Experience</h2>
<div class="grid">
	{#each siteData.experiences.personal as experience (experience.name)}
		<Experience {experience} />
	{/each}
</div>

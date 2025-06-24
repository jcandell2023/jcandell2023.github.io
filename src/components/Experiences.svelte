<script lang="ts">
	import Experience from './Experience.svelte';
	import { siteData } from '../data';
</script>

<h2>Work Experience</h2>
<div class="grid" id="experiences">
	{#each siteData.experiences as experience (experience.name)}
		<Experience {experience} />
	{/each}
</div>

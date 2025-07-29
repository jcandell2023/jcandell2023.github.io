<script lang="ts">
	import Project from './Project.svelte';
	import { siteData } from '../data';
</script>

<h2 id="projects">Projects</h2>
<div>
	{#each siteData.projects as project (project.name)}
		<Project {project} />
	{/each}
</div>

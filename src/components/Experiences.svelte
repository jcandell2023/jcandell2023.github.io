<script lang="ts">
	import Experience from "./Experience.svelte";
	import { siteData } from "../data";
</script>

<div class="grid">
	{#each siteData.experiences as experience }
		<Experience {experience} />
	{/each}
</div>

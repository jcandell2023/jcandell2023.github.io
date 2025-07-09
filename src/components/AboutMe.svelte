<script lang="ts">
	import { siteData } from '../data';
</script>

<div class="grid">
	<div class="s12 m6">
		<h2 id="about-me" class="center-align">About Me</h2>
		<p class="large-text">{siteData.aboutMe.summary}</p>
	</div>
	<div class="s12 m6">
		<h2 class="center-align">Skills</h2>
		<div class="skills">
			{#each siteData.aboutMe.skills as skill (skill)}
				<span class="chip">{skill}</span>
			{/each}
		</div>
	</div>
</div>

<style lang="css">
	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.chip {
		margin: 0 0.25rem;
	}
</style>

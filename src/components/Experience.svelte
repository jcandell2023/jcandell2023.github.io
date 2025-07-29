<script lang="ts">
	type Props = { experience: Data.Experience };
	let { experience }: Props = $props();
</script>

<article class="s6 m4 no-padding fill">
	{#if experience.imgUrl != null}
		<img src={experience.imgUrl} alt="Logo" />
	{/if}
	<div class="padding">
		<h5>{experience.name}</h5>
		<p>{experience.role}</p>
	</div>
</article>

<style lang="css">
	img {
		width: 100%;
		object-fit: contain;
		padding: 1rem;
	}

	article:hover {
		background-color: var(--primary-container) !important;
		color: var(--on-primary-container) !important;
	}
</style>

<script lang="ts">
	type Props = { project: Data.Project };
	let { project }: Props = $props();
</script>

<article>
	<h5>{project.name}</h5>
	<p>Check it out!</p>
</article>

<style lang="css">
	article:hover {
		background-color: var(--primary);
		color: var(--on-primary);
	}
</style>

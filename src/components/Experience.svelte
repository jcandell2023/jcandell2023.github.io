<script lang="ts">
    type Props = { experience: Data.Experience }
    let { experience }: Props = $props()
</script>

<article class="s6 m4 no-padding border fill">
    <img src={experience.imgUrl} alt="Logo" class="">
    <div class="padding">
        <h5>{experience.name}</h5>
        <p>{experience.description}</p>
    </div>
</article>

<style lang="css">
    img {
        width: 100%;
        height: 10rem;
        object-fit: cover;
    }

    img:hover {
        height: auto;
    }
</style>
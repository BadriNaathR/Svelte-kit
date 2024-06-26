<script>
    export let data;
</script>

<h1>Today's Headline</h1>

{#each data.news as news}
    <h2>{news.title}</h2>
{/each}
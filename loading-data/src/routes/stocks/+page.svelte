<script>
    export let data;
</script>

<h1>Actively Trending stocks</h1>

{#each data.stocks as stock}
    <h2>{stock.symbol} - {stock.price}</h2>
{/each}
<script>
    export let data;
    const title = data.title;
    const username = data.username;
    const featuredProducts = data.featuredProducts;
</script>
<slot/>
<h2>{title} for {username}</h2>

{#each featuredProducts as product}
    <div class="items">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
    </div>
{/each}
<style>
    .items{
        display: inline-block;
        width: 200px;
        margin: 20px;
        border: 5px solid #ccc;
        padding: 10px;
    }
</style>
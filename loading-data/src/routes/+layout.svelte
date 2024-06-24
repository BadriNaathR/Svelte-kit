<script>
    import {page} from '$app/stores'
    export let data;
    const {username} = data;
</script>

<svelte:head>
    <title>{$page.data.title || "Welcome"}</title>
</svelte:head>
{#if $page.data.notify}
    <div>{$page.data.notify}</div>
{/if}
    <h4>Welcome ,{username}</h4>
<slot/>
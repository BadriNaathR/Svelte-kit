<script>
    export let data;
</script>

<span>Most Active Stock - {data.most.symbol}</span>
<span>Most Gain Stock - {data.gain.symbol}</span>
<span>Most Losing Stock - {data.lose.symbol}</span>

<style>
    span{
        margin-right: 30px;
        font-size :larger;
    }
</style>

<slot/>
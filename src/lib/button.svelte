<script lang="ts">
    export let buttonTitle: string;
</script>

<button on:click>{buttonTitle}</button>

<style lng="scss">
    button {
        background-color: rgb(139,71,93);
        color: peachpuff;
        border: none;
        margin: 8px 0;
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
    }
</style>
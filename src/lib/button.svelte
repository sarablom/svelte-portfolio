<script lang="ts">
    export let buttonTitle: string;
</script>

<button on:click>{buttonTitle}</button>

<style lng="scss">
    button {
        background-color: var(--color-aubergine);
        color: var(--color-peachpuff);
        border: none;
        margin: 8px 0;
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }
</style>
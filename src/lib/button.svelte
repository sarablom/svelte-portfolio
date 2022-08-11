<script lang="ts">
    export let buttonTitle: string;
    
</script>

<button 
    class="button" on:click type="submit">{buttonTitle}</button>

<style lang="scss">
    button {
        align-self: center;
        background-color: var(--color-aubergine);
        background: linear-gradient(90deg, rgba(139,71,93,1) 23%, rgba(148,98,143,1) 100%);
        color: var(--color-peachpuff);
        border: none;
        margin: 32px 0;
        padding: 16px 32px;
        border-radius: 4px;
        font-size: var(--font-size-m);
        font-weight: 600;
        cursor: pointer;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        transition: transform 250ms;

        &:hover {
            background: linear-gradient(90deg, rgba(148,98,143,1) 23%, rgba(139,71,93,1) 100%);
            transform: scale(1.02);
        }
    }
</style>
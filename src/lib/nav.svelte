<script>
    import { MenuIcon } from 'svelte-feather-icons';

    export let menuOpen = false;
</script>

<nav>
    <ol>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/contact">Contact</a></li>
    </ol>
    {#if menuOpen}
        <MenuIcon />
    {/if}
</nav>

<style lang="scss">
    ol {
        display: flex;
        list-style-type: none;
    }

    li {
        padding: 0 16px;
    }

    a {
        text-decoration: none;
        color: inherit;

        &:hover {
            text-decoration: underline;
        }
    }

   
</style>
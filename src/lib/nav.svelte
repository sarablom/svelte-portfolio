<script lang="ts">
    // import { MenuIcon } from 'svelte-feather-icons';

import HamburgerMenu from "./hamburgerMenu.svelte";
import { fly } from 'svelte/transition'
    // export let menuOpen = false;
    export let open = false
  export let onClick = (): void => {
    open = !open
  }

    let innerWidth = 0

</script>

<svelte:window bind:innerWidth />

<nav>
    <h3>Sara Blom</h3>
    {#if innerWidth > 600}
    <ol>
        <li><a href="/">Home</a></li>
        <!-- <li><a href="/about">About</a></li> -->
        <li><a href="/projects">Projects</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/contact">Contact</a></li>
    </ol>
    {:else}
        <HamburgerMenu {open} {onClick} />
    {/if}
</nav>

<style lang="scss">
    nav {
        display: flex;
        align-items: baseline;
        width: 90vw;
        max-width: var(--max-width);
    }
    h3 {
        margin-right: auto;
    }

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
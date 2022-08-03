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

    {#if open}
        <ul class="burgerMenuOpen">
            <li on:click={onClick}><a href="/">Home</a></li>
            <!-- <li><a href="/about">About</a></li> -->
            <li on:click={onClick}><a href="/projects">Projects</a></li>
            <li on:click={onClick}><a href="/experience">Experience</a></li>
            <li on:click={onClick}><a href="/contact">Contact</a></li>
        </ul>
    {/if}
</nav>

<style lang="scss">
    nav {
        position: relative;
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

   ul.burgerMenuOpen {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 8px;
    background: var(--color-blackish);
    list-style-type: none;
   }
</style>
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
        <h3><a href="/">Sara Blom</a></h3>
        {#if innerWidth > 670}
        <ol>
            <li><a href="/" class="underline">Home</a></li>
            <!-- <li><a href="/about">About</a></li> -->
            <li><a href="/projects" class="underline">Projects</a></li>
            <li><a href="/experience" class="underline">Experience</a></li>
            <li><a href="/contact" class="underline">Contact</a></li>
        </ol>
        {:else}
            <HamburgerMenu {open} {onClick} />
        {/if}
    
        {#if open}
            <ul class="burgerMenuOpen">
                <li on:click={onClick}><a href="/" class="underline">Home</a></li>
                <!-- <li><a href="/about">About</a></li> -->
                <li on:click={onClick}><a href="/projects" class="underline">Projects</a></li>
                <li on:click={onClick}><a href="/experience" class="underline">Experience</a></li>
                <li on:click={onClick}><a href="/contact" class="underline">Contact</a></li>
            </ul>
        {/if}
</nav>

<style lang="scss">
    nav {
        position: relative;
        display: flex;
        align-items: baseline;
        width: 100%;
        padding: 0 32px;
        max-width: var(--max-width);
    }

    h3 {
        display: inline;
        margin-right: auto;
        font-family: 'Inspiration', cursive;
        font-size: var(--font-size-l);
    }

    ol {
        display: flex;
        list-style-type: none;
    }

    li {
        padding: 0 16px;
        transition: ease-in 0.2s;

        &:hover {
            transform: scale(1.1);
        }
        
    }

    a.underline {
        color: inherit;
        background-image: linear-gradient(
            to right, 
            var(--color-aubergine), 
            var(--color-dark-peachpuff) 50%,
            var(--color-dark-peachpuff) 50%
            );
            background-size: 200% 100%;
            background-position: -100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: all 0.3s ease-in-out;

        &:before {
            content: '';
            background: var(--color-aubergine);
            display: block;
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 0;
            height: 3px;
            transition: all 0.3s ease-in-out;
        }

        &:hover {
            background-position: 0;
        }

        &:hover::before {
            width: 100%;
        }
    }

   ul.burgerMenuOpen {
    display: flex;
    flex-direction: column;
    position: absolute;
    gap: 16px;
    top: 80px;
    right: -32px;
    background-color: var(--color-gray-100);
    list-style-type: none;
    padding: 32px 32px 64px 100vw;
   }
</style>

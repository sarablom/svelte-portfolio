<script lang="ts">
	import HamburgerMenu from "./hamburgerMenu.svelte";
	export let open = false;
	let innerWidth = 0;
	export let onClick = (): void => {
		open = !open;
	};
</script>

<svelte:window bind:innerWidth />

<nav>
	<h3><a href="/">Sara Blom</a></h3>
	{#if !innerWidth}
		<div />
	{:else if innerWidth > 670}
		<ol>
			<li><a href="/" class="underline">Home</a></li>
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
			<li on:click={onClick}>
				<a href="/projects" class="underline">Projects</a>
			</li>
			<li on:click={onClick}>
				<a href="/experience" class="underline">Experience</a>
			</li>
			<li on:click={onClick}>
				<a href="/contact" class="underline">Contact</a>
			</li>
		</ul>
	{/if}
</nav>

<style lang="scss">
	nav {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 0;
		margin: 0;
		max-width: var(--max-width);
	}

	h3 {
		display: inline;
		margin-right: auto;
		font-family: "Inspiration", cursive;
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
		background-size: 100%;
		background-position: -100%;
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
		transition: all 0.3s ease-in-out;

		&:hover {
		text-decoration: underline;
		}
	}

	ul.burgerMenuOpen {
    z-index: 1;
		position: absolute;
		top: 60px;
		right: 0;
    bottom: 0;
		display: flex;
		flex-direction: column;
		gap: 16px;
		background-color: var(--color-gray-100);
		list-style-type: none;
		padding: 32px 32px 64px 100vw;
	}
</style>

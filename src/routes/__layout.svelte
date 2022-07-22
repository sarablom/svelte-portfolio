<script>
    import Nav from "../lib/nav.svelte";
    import "../styles/globalStyles.css";
</script>

<header>
    <Nav />
</header>
<main>
    <slot></slot>
</main>
<footer>
    Copyright 2022 Sara Blom
</footer>
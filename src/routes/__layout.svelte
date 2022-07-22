<script>
    import Nav from "../lib/nav.svelte";
    import "../styles/globalStyles.css";
</script>

<div class="wrapper">
    <header>
        <Nav />
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        Copyright 2022 Sara Blom
    </footer>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    header {
        min-height: 5rem;
        display: flex;
        justify-content: center;
    }

    main {
        flex: 1;
        margin: 0 auto;
    }

    footer {
        min-height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
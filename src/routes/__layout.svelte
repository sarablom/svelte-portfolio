<script>
    import Footer from "$lib/footer.svelte";
    import Nav from "$lib/nav.svelte";
    import "../styles/globalStyles.css";


</script>

<div class="wrapper">
    <header>
        <Nav />
    </header>
    <main>
        <slot></slot>
    </main>
    <Footer />
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    header {
        min-height: 5rem;
        display: flex;
        justify-content: center;
        padding: 32px;
    }

    main {
        flex: 1;
        margin: 0 auto;
        padding: 32px;
        
      max-width: 1000px;
 
    }
</style>
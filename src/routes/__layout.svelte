<script>
    import Footer from "$lib/footer.svelte";
    import Nav from "$lib/nav.svelte";
    import "../styles/globalStyles.css";
    import "../styles/variables.css";
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

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
  }

  header {
    width: 100%;
    min-height: 5rem;
    display: flex;
    justify-content: center;
    padding: 32px;
    background-color: var(--color-gray-100);
    box-shadow: 2.6px 5.3px 5.3px hsl(0deg 0% 0% / 0.42);

    @media screen and (max-width: 800px) {        
        padding: 16px;
    }
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 32px;
    width: 100%;
    max-width: var(--max-width);
  }
</style>
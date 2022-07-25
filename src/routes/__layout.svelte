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
        <div class="copy">
          <p>&#169; Sara Blom, 2022</p>
        </div>
        <div class="social-media">
          <a href="https://github.com/sarablom/" target="”_blank”"
            ><img src="img/github-sign@2x.png" alt="Github-link"
          /></a>
          <a
            href="https://www.linkedin.com/in/sara-blom-8ba389144/"
            target="”_blank”"
            ><img src="img/linkedin-logo@2x.png" alt="LinkedIn-link"
          /></a>
          <a
            href="https://www.instagram.com/sarafox.barnklader/"
            target="”_blank”"
            ><img src="img/instagram@2x.png" alt="Instagram-link"
          /></a>
          <a
            href="https://open.spotify.com/artist/1Vhr0X4FgDzqk8s33DUWCz?si=_oi5Cq8mSNuOgx3o4DN0HQ"
            target="”_blank”"
            ><img src="img/spotify@2x.png" alt="Spotify-link"
          /></a>
        </div>
      </footer>
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
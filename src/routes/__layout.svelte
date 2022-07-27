<script>
    import Nav from "../lib/nav.svelte";
    import "../styles/globalStyles.css";
    import { GithubIcon, InstagramIcon, LinkedinIcon } from "svelte-feather-icons";

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
            ><GithubIcon size="3x" /></a>
          <a
            href="https://www.linkedin.com/in/sara-blom-8ba389144/"
            target="”_blank”"
            ><LinkedinIcon size="3x" /></a>
          <a
            href="https://www.instagram.com/sarafox.barnklader/"
            target="”_blank”"
            ><InstagramIcon size="3x" /></a>
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
        padding: 32px;
    }

    main {
        flex: 1;
        margin: 0 auto;
        padding: 32px;
        
      max-width: 1000px;
 
    }

    footer {
        min-height: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 32px;
    }

    .social-media {
        display: flex;
    }
</style>
<script>
    import { GithubIcon, InstagramIcon, LinkedinIcon } from "svelte-feather-icons";
	import ScreenReaderText from "./screenReaderText.svelte";
</script>


<footer>
    <div class="wrapper">
        <div class="copy">
            <p>&#169; Sara Blom, 2024</p>
        </div>
        <div class="social-media">
            <a 
                href="https://github.com/sarablom/" 
                target="_blank”"
            >
                <GithubIcon size="3x" />
                <ScreenReaderText text="GitHub" />
            </a>
            <a
                href="https://www.linkedin.com/in/sara-blom-8ba389144/"
                target="_blank”"
            >
                <LinkedinIcon size="3x" />
                <ScreenReaderText text="LinkedIn" />
            </a>
            <a
                href="https://www.instagram.com/sarafox.barnklader/"
                target="_blank”"
            >
                <InstagramIcon size="3x" />
                <ScreenReaderText text="Instagram" />
            </a>
        </div>
    </div>
</footer>

<style lang="scss">
  footer {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--color-gray-100);
    padding: 32px;

    @media screen and (max-width: 800px) {        
        padding: 16px;
    }
  }

  .wrapper {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    min-height: 3rem;
    width: 100%;
    max-width: var(--max-width);
  }

  .social-media {
    display: flex;
    gap: 16px;

    a {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      transform: scale(1.1);
    }
    }
  }
</style>
<script>
        import { GithubIcon, InstagramIcon, LinkedinIcon } from "svelte-feather-icons";
</script>


<footer>
    <div class="wrapper">
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
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        width: 100%;
        background-color: var(--color-gray-100);
        padding: 32px;
    }

    .wrapper {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        min-height: 3rem;
        max-width: var(--max-width);
    }

    .social-media {
        display: flex;
        gap: 16px;
    }
</style>
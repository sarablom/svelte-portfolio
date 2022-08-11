<script>
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
import MainHeading from "$lib/mainHeading.svelte";

    export const projects = [
        {
            id: 1,
            title: "Vobbiz",
            description: "This is my first real project that is going live in the fall of 2022. I've been part of a team of three people and we've done the project from scratch in three months time. We've used React with TypeScript on the frontend and NodeJS with Express on the backend. We made the prototype and wireframes in Figma. Our database is MongoDB, but we don't store a lot of data, since we've mainly been working with external API:s. This project includes 6 external API:s! I really learned a lot, and I'm so proud of the end result.",
            pageHref: "https://vobbiz-frontend.azurewebsites.net/",
            codeHref: "",
            transition: {
                delay: 0,
                duration: 400,
                easing: cubicOut,
                opacity: 0.5,
                x: -100,
                y: -100,
            }
        },
        {
            id: 2,
            title: "Stillsamhetens Spa",
            description: "A fullstack application built with React, TypeScript, Node, Express and MongoDB. This application is built with Test Driven Development (TDD).",
            pageHref: "https://stillsamhetens-spa.herokuapp.com/",
            codeHref: "https://github.com/sarablom/spa-shop",
            transition: {
                delay: 0,
                duration: 400,
                easing: cubicOut,
                opacity: 0.5,
                x: 100,
                y: -100,
            },
        },
        {
            id: 3,
            title: "Instablam",
            description: "An application where you can take photos and save them to a gallery. The photos are saved in LocalStorage. The focus with building this app has been with interacting with the camera and GPS of the device.",
            pageHref: "https://instablam-pwa.netlify.app/",
            codeHref: "https://github.com/sarablom/pwa-instablam",
            transition: {
                delay: 0,
                duration: 400,
                easing: cubicOut,
                opacity: 0.5,
                x: 100,
                y: 100,
            },
        }
    ]
</script>

<section class="projects">
    <MainHeading headingTitle="Projects" />

    {#each projects as { id, transition, title, description, pageHref, codeHref } (id)}
        <article in:fly={transition}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a
                class="project-link"
                href={pageHref}
                target="_blank"
                rel="noopener noreferrer"
            >The site
            </a>
            <span class="dot white"></span>
            {#if (codeHref)}
            <a
            class="project-link"
            href={codeHref}
            target="_blank"
            rel="noopener noreferrer"
            >The code
            </a>
            {:else}
            <span class="no-code">Not allowed to show this code</span>
            {/if}
        </article>
    {/each}

</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;
        margin-bottom: 32px;
    }

    article {
        /* border: 6px dotted var(--color-aubergine); */
        padding: 16px;
        border-radius: 16px;
        background-image: linear-gradient(
            to right, 
            var(--color-gray-100), 
            var(--color-gray-50),
            var(--color-aubergine)
            );
        /* background: var(--color-gray-100); */
        box-shadow: 3.8px 7.5px 7.5px hsl(0deg 0% 0% / 0.38);
        max-width: 600px;

        span.dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: var(--color-dark-peachpuff);
        }
    }

    a {
        padding: 4px 2px;
        
    &:hover {
        text-decoration: underline;
    }

    &:focus {
        outline: 1px solid var(--color-aubergine);
    }
}

    
</style>
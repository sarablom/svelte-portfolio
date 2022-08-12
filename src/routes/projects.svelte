<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';
    import type { Project } from 'src/models/project';

    export const load: Load = async ({ fetch }) => {
        const response = await fetch("projects.json");
        const projects = await response.json();

        if (response.ok) {
            return {
                props: {
                    projects: projects as Project[]
                }
            }
        }

        return {
            status: response.status,
            error: new Error("Could not fetch the projects")
        }
	};

</script>

<script lang="ts">
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import MainHeading from "$lib/mainHeading.svelte";

    export let projects: Project[];   
</script>

<section class="projects">
    <MainHeading headingTitle="Projects" />

    {#each projects as { id, transition, title, description, pageHref, codeHref } (id)}
        <article in:fly={{
            delay: 0,
            duration: 400,
            easing: cubicOut, 
            opacity: 0.5,
            ...transition, 
            }}>
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
        padding: 16px;
        border-radius: 16px;
        background: var(--color-gray-100); 
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
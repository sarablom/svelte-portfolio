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

    {#each projects as { id, transition, title, description } (id)}
    <article in:fly={{
        delay: 0,
        duration: 400,
        easing: cubicOut, 
        opacity: 0.5,
        ...transition, 
    }}>
    <a href={`/projects/${id}`}>
            <h3>{title}</h3>
            <p>{description}</p>
        </a>
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
        width: 90%;
        max-width: min(600px, 90%);

        &:hover {
            transform: scale(1.02);
        }

        p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            word-break: break-word;
            margin-bottom: 1em;
        }
        
            a {
                padding: 4px 2px;
        
            &:focus {
                outline: 1px solid var(--color-aubergine);
            }
    }
}  
</style>
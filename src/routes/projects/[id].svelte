<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";
	import type { Project } from "src/models/project";

	export const load: Load = async ({ params, fetch }) => {
		const id = params.id;
		const response = await fetch("../projects.json");
		const projects = await response.json();

		const project = projects.find((project: Project) => {
			return project.id.toString() === id;
		});

		if (response.ok) {
			return {
				props: {
					project: project as Project,
				},
			};
		}

		return {
			status: response.status,
			error: new Error("Could not fetch the project"),
		};
	};
</script>

<script lang="ts">
	import { ArrowLeftCircleIcon } from "svelte-feather-icons";
	import MainHeading from "$lib/mainHeading.svelte";
	export let project: Project;
	export let { techniques } = project;
</script>

<section class="project">
	<div class="header-wrapper">
		<a class="back-button aside" href="/projects">
			<ArrowLeftCircleIcon size="36" />
		</a>
		<MainHeading headingTitle={project.title} />
    <div class="aside" />
	</div>
	<p>{project.description}</p>
	<h3>Techniques</h3>
	<ol>
		{#each techniques as technique}
			<li>{technique}</li>
		{/each}
	</ol>
	{#if project.pageHref}
  <a
		class="project-link"
		href={project.pageHref}
		target="_blank"
		rel="noopener noreferrer"
	>
		The site
	</a>
	<span class="dot white" />
  {/if}
	{#if project.codeHref}
		<a
			class="project-link"
			href={project.codeHref}
			target="_blank"
			rel="noopener noreferrer"
			>The code
		</a>
	{:else}
		<span class="no-code">Code not public</span>
	{/if}
</section>

<style lang="scss">
	.header-wrapper {
		display: flex;
    align-items: baseline;
    
    .aside {
      flex: 1;
    }
	}

	p {
		padding: 32px 0;
	}
	ol {
		list-style-type: none;
		padding-left: 0;
		padding-bottom: 32px;
	}

	span.dot {
		display: inline-block;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: var(--color-dark-peachpuff);
	}

	a.back-button {
		border: none;
		margin-right: auto;
    min-width: max-content;
    padding-right: 16px;
	}

	a.project-link {
		padding: 4px 2px;

		&:focus {
			outline: 1px solid var(--color-aubergine);
		}
	}
</style>

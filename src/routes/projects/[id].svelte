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
	import {
		AirplayIcon,
		AtSignIcon,
		ArrowLeftCircleIcon,
	} from "svelte-feather-icons";
	import MainHeading from "$lib/mainHeading.svelte";
	export let project: Project;
	export let { techniques } = project;
</script>

<section class="project">
	<div class="header-wrapper">
		<a class="back-button" href="/projects">
			<ArrowLeftCircleIcon size="36" />
		</a>
		<MainHeading headingTitle={project.title} />
	</div>
	<p>{project.description}</p>
	<h3>Techniques</h3>
	<ol>
		{#each techniques as technique}
			<li>{technique}</li>
		{/each}
	</ol>
	<a
		class="project-link"
		href={project.pageHref}
		target="_blank"
		rel="noopener noreferrer"
	>
		The site
	</a>
	<span class="dot white" />
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
		position: relative;
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
		position: absolute;
		top: 12px;
		left: 0;
		border: none;
		margin-right: auto;
	}

	a.project-link {
		padding: 4px 2px;

		&:focus {
			outline: 1px solid var(--color-aubergine);
		}
	}
</style>

<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	
	export const load: Load = async ({ fetch }) => {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		const guides = await response.json();

        if (response.ok) {
            return {
                props: {
                    guides
                }
            }
        }

        return {
            status: response.status,
            error: new Error("Could not fetch the guides")
        }
	};
</script>

<script lang="ts"> 
    import type { Guide } from 'src/models/guide';
  
    export let guides: Guide[];
  </script>

<div class="test">
    <ul>
        {#each guides as guide}
            <li>{guide.title}</li>
        {/each}
    </ul>
  </div>
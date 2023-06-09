<script lang="ts">
  export let headingTitle: string;
</script>

<h1>{headingTitle}</h1>

<style lng="scss">
	h1 {
		text-align: center;
		margin-bottom: 32px;
		font-size: var(--font-size-xxl);
		background: -webkit-linear-gradient(
			0deg, 
			var(--color-dark-peachpuff),
			var(--color-peachpuff),
			var(--color-light-peachpuff),  
			var(--color-peachpuff),
			var(--color-dark-peachpuff)
		);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
<script lang="ts">
	export let headingTitle: string;
</script>

<h1>{headingTitle}</h1>

<style lng="scss">
	h1 {
		text-align: center;
		margin-bottom: 16px;
		font-size: var(--font-size-xxl);
		background-image: linear-gradient(
			to right,
			var(--color-aubergine),
			var(--color-dark-peachpuff) 50%,
			var(--color-dark-peachpuff) 50%
		);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	@media screen and (max-width: 801px) {
		h1 {
			margin-bottom: 0;
		}
	}
</style>

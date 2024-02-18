<script lang="ts">
	export let headingTitle: string;
</script>

<h1>{headingTitle}</h1>

<style lng="scss">
	h1 {
    display: inline-block;
		text-align: center;
		font-size: var(--font-size-xxl);
		background-image: linear-gradient(
			/* to right, */
      -225deg,
			var(--color-aubergine),
			var(--color-dark-peachpuff) 50%,
      var(--color-aubergine) 85%
		);
		-webkit-text-fill-color: transparent;
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    animation: textclip 10s linear infinite;
	}

	@media screen and (max-width: 601px) {
		h1 {
			margin: 0 auto 16px;
      max-width: 300px;
		}
	}

  @keyframes textclip {
      to {
        background-position: 200% center;
      }
    }
</style>

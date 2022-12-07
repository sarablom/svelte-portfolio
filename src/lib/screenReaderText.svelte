<script lang="ts">
  export let text: string;
</script>

<span>{text}</span>

<style lang="scss">
span {
  border: none;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
</style>
<script>
import MainHeading from "$lib/mainHeading.svelte";
import Button from "../lib/button.svelte";

  function onClickHandler() {
    console.log("Button clicked!");
  }
  
  let name = "";
  let email = "";
  let message = "";

</script>
<section>

    <MainHeading headingTitle="Contact me" />

    <form class="contact-form">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" required bind:value={name} />

      <label for="email">E-mail</label>
      <input type="email" name="email" id="email" required bind:value={email} />

      <label class="label3" for="message">Message</label>
      <textarea
        class="textarea"
        id="message"
        name="message"
        form="form"
        cols="30"
        rows="10"
        bind:value={message}
        required
      ></textarea>
      <Button buttonTitle="Submit" on:click={onClickHandler} />
    </form>
</section>

<style>
.contact-form {
    display: flex;
    flex-direction: column;
    max-width: 80vw;
}
</style>

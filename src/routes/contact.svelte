<script>
import MainHeading from "$lib/mainHeading.svelte";
import Button from "../lib/button.svelte";

  function onClickHandler() {
    console.log("Button clicked!");
  }

</script>
<section>

    <MainHeading headingTitle="Contact me" />

    <form class="contact-form">
      <label class="label1" for="name">Name</label>
      <input class="input1" type="text" name="name" id="name" required />

      <label class="label2" for="email">E-mail</label>
      <input class="input2" type="email" name="email" id="email" required />

      <label class="label3" for="message">Message</label>
      <textarea
        class="textarea"
        id="message"
        name="message"
        form="form"
        cols="30"
        rows="10"
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
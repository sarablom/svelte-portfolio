<script lang="ts">
import MainHeading from "$lib/mainHeading.svelte";
import Button from "../lib/button.svelte";

  function onClickHandler(e: any) {
    e.preventDefault();
    console.log("Button clicked!", name, email, message);
  }
  
  let name = "";
  let email = "";
  let message = "";

</script>
<section>
    <MainHeading headingTitle="Contact me" />

    <form class="contact-form" on:submit={onClickHandler}>
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
      <Button buttonTitle="Submit" />
    </form>
</section>

<style>

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

.contact-form {
    display: flex;
    flex-direction: column;
    max-width: min(600px, 100%);
}
label {
  font-size: var(--font-size-s);
}

input {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

input[type=text],
input[type=email] {
    margin-bottom: 32px;
    height: 48px;
    border-radius: 4px;
}
</style>

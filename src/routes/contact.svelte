<script>

</script>
<section>

    <h1 class="contact">Contact<span class="dot"></span></h1>

    <form
      action="https://formspree.io/f/mqkgjykq"
      method="POST"
      id="form"
      class="contact-form"
    >
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
      <button type="submit" class="btn">Submit</button>
    </form>
</section>

<style>
.contact-form {
    display: flex;
    flex-direction: column;
}
</style>
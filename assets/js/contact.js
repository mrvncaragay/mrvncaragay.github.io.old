export const contact = `
<div class="inner">
  <h2>Send a message</h2>
  <div class="split style1">
    <section>
      <form method="post" action="https://formspree.io/f/mgepywgb">
        <div class="fields">
          <div class="field half">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div class="field half">
            <label for="email">Email</label>
            <input type="text" name="email" id="_replyto" />
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="5"></textarea>
          </div>
        </div>
        <ul class="actions">
          <li><a type="submit" class="button submit">Send Message</a></li>
        </ul>
      </form>
    </section>

    <section>
      <ul class="contact">
        <li>
          <h3>Email</h3>
          <a href="#">mrvncaragay@gmail.com</a>
        </li>
        <li>
          <h3>Phone</h3>
          <span>(925) 399-2307</span>
        </li>
        <li>
          <h3>Social</h3>
          <ul class="icons">
            <li><a href="https://github.com/mrvncaragay" taget="_blank" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
            <li><a href="https://linkedin.com/in/mrvncaragay" taget="_blank" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</div>
`;
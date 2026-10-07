export default function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <p>Let’s Create Something Meaningful.</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

<script>
  import sup from '$lib/assets/sup.png';
  // TODO dynamic logo
</script>

<img src={sup} alt="hangs.dev logo" />
<article class="secondary-container">
  <header><h3>Let's hang</h3></header>
  <p>Enter or scan an invite code to get started</p>
  <form action="/hang" method="get">
    <input type="text" name="code" placeholder="Enter a code" />
    <button type="submit">Go</button>
  </form>
    <!-- TODO: qr code scanner -->
    <button on:click|preventDefault disabled>Scan for QR code</button>
  <!-- TODO: conditional on not being logged in/registration state -->
  <footer>Or <a href="/login">log in</a> to start your own hang</footer>
</article>

<style>
  img {
    max-width: 100%;
    height: auto;
  }
</style>

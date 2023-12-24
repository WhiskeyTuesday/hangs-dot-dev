<script>
  import sup from '$lib/assets/sup.png';
  // TODO dynamic logo
</script>

<img src={sup} alt="hangs.dev logo" />
<article class="secondary-container">
  <header><h3>Let's hang</h3></header>
  <p>Enter or scan an invite code to get started</p>
  <form action="/hang" method="post">
    <input type="text" name="code" placeholder="Enter a code" />
    <button type="submit">Go</button>
  </form>
  <footer>Or <a href="/login">log in</a> to start your own hang</footer>
</article>

<style>
  img {
    max-width: 100%;
    height: auto;
  }
</style>

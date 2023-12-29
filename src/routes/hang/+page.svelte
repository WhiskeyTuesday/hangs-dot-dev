<script>
  let code = false;
</script>

{#if !code}
  <article class="secondary-container">
    <header><h3>Let's hang</h3></header>
    <p>Enter or scan an invite code to get started</p>
    <form action="/hang" method="get">
      <input type="text" name="code" placeholder="Enter a code" />
      <button type="submit">Go</button>
    </form>
  </article>
{/if}

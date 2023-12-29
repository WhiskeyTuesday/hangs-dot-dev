<script>
  import sup from "$lib/assets/sup.png";
  import { auth as firebaseAuth } from "$lib/firebase.svelte";
  import { onAuthStateChanged } from "firebase/auth";

  let { user } = $props();
  let loggedIn = $state(!!user?.user);
  onAuthStateChanged(firebaseAuth, (u) => {
    if (u) {
      loggedIn = true;
    } else {
      loggedIn = false;
    }
  });
</script>

<!-- TODO dynamic logo? -->
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
  <footer>
    {#if loggedIn}
      Or <a href="/create">Start your own hang</a>
    {:else}
      Or <a href="/profile">log in</a> to start your own hang
    {/if}
  </footer>
</article>

<style>
  img {
    max-width: 100%;
    height: auto;
  }
</style>

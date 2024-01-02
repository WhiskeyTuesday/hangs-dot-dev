<script>
  import { auth as firebaseAuth } from "$lib/firebase.svelte";
  import { onAuthStateChanged } from "firebase/auth";
  import Navbar from "../components/Navbar.svelte";

  let userState = $state(null);

  export const user = {
    get user() { return userState; },
    logIn: (u) => userState = u,
    logOut: () => userState = null,
  };

  // TODO: something better lol -- also handle twitter login?
  let avatar = $state(user.user?.displayName?.slice(0, 2) || false);
  let loggedIn = $state(false);

  $effect(() => {
    avatar = (user.user?.displayName).slice(0, 2);
    loggedIn = !!user.user;
  });

  onAuthStateChanged(firebaseAuth, (u) => {
    if (u) {
      user.logIn(u);
      avatar = (u.displayName || u.email || u.phoneNumber).slice(0, 2);
    } else {
      user.logOut();
    }
  });
</script>

<Navbar />

<main class="container">
  <nav id="top-nav">
    <ul>
      <!-- TODO dynamic phrase here -->
      <li><a href="/"><em><strong>Hangs.dev - LFG</strong></em></a></li>
    </ul>
    <ul>
      <!-- TODO dynamic login/logout here -->
      {#if loggedIn}
        <li><a href="/profile">{avatar}</a></li>
      {:else}
        <li><a href="/profile">Log In</a></li>
      {/if}
    </ul>
  </nav>

  <slot user />
</main>

<style>
  main {
    padding-left: 6rem;
  }

  #top-nav a {
    color: var(--secondary);
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    main {
      padding-left: 1rem;
    }
  }
</style>

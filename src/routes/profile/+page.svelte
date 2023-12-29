<script>
  // import firebase stuff
  // copy some stuff from dtb
  // uhh... yeah

  import { auth as firebaseAuth } from "$lib/firebase.svelte";

  import {
    // twitterAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
    getAdditionalUserInfo,
    onAuthStateChanged,
  } from "firebase/auth";

  let { user } = $props();
  let loggedIn = $state(!!user?.user);

  onAuthStateChanged(firebaseAuth, (u) => {
    if (u) {
      loggedIn = true;
      // TODO: compare avatar to stored avatar (update?)
      // TODO: check if same email address is used with other provider...
      // in which case... do something? merge accounts? prompt? idk.
    } else {
      loggedIn = false;
    }
  });

  let isTryingAuth = $state(false);
  let authFailed = $state(false);

  const signIn = async () => {
    const githubProvider = new GithubAuthProvider();
    isTryingAuth = true;
    authFailed = false;

    try {
      const result = await signInWithPopup(firebaseAuth, githubProvider);
      const additional = getAdditionalUserInfo(result);
      console.log({ result, additional });

      const credential = GithubAuthProvider.credentialFromResult(result);

      isTryingAuth = false;
      authFailed = false;
    } catch (err) {
      console.error(err);
      const credential = githubAuth.credentialFromError(err);
      if (credential) {
        const token = credential.accessToken;
        const secret = credential.secret;
        console.log({ token, secret });
      }
      isTryingAuth = false;
      authFailed = true;
    }
  };

  const signOut = async () => {
    isTryingAuth = false;
    authFailed = false;

    try {
      await firebaseAuth.signOut();
      isTryingAuth = false;
      authFailed = false;
    } catch (err) {
      console.error(err);
      isTryingAuth = false;
      authFailed = true;
    }
  };
</script>

{#if loggedIn}
  <article>
    <header><h3>Profile</h3></header>
    <ul>
      <li>TODO: show profile picture</li>
      <li>TODO: show profile name</li>
      <li>TODO: show profile email</li>
      <li>TODO: etc...</li>
      <li>Get self from server:</li>
      <ul>
        <li>TODO: show attended, hosting, invites, etc.</li>
      </ul>
    </ul>
    <footer>
      <button on:click={signOut}>Log Out</button>
    </footer>
  </article>
{:else if isTryingAuth}
  <article>
    <header><h3>Logging In...</h3></header>
    <ul>
      <li>TODO: show spinner</li>
    </ul>
  </article>
{:else}
  <article>
    <header><h3>Log In</h3></header>
    <ul>
      <li>TODO: log in with twitter/x button</li>
      <li>TODO: log in with github button</li>
    </ul>

    <footer>
      <button on:click={signIn}>Log In With GitHub</button>
    </footer>
  </article>
{/if}

<dialog open={authFailed}>
  <p>Authentication failed.</p>
</dialog>

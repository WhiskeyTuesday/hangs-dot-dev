<script>
  // import firebase stuff
  // copy some stuff from dtb
  // uhh... yeah

  import { auth as firebaseAuth } from "$lib/firebase";

  import {
    // twitterAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
    getAdditionalUserInfo,
  } from "firebase/auth";


  let isTryingAuth = false;
  let authFailed = false;

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

<article>
  <header><h3>Log In</h3></header>
  <ul>
    <li>TODO: log in with twitter/x button</li>
    <li>TODO: log in with github button</li>
  </ul>

  <button on:click={signIn}>Log In With GitHub</button>
  <button on:click={signOut}>Log Out</button>

  <footer>TODO</footer>
</article>

<dialog open={authFailed}>
  <p>Authentication failed.</p>
</dialog>

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// NOTE: This is not a secret, it's okay to commit this
const firebaseConfig = {
  apiKey: "AIzaSyCPvSePcGuIqZPrZw4s0NVIlfl2bhWvMAo",
  authDomain: "hangs-dotdev.firebaseapp.com",
  projectId: "hangs-dotdev",
  storageBucket: "hangs-dotdev.appspot.com",
  messagingSenderId: "474131295081",
  appId: "1:474131295081:web:efa81605bbd2a062fb2bf8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

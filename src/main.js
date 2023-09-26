import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/style.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS3_bAfzIhcuATKKsTaC_QeuW9ex7XoeQ",
  authDomain: "pokemon-14654.firebaseapp.com",
  projectId: "pokemon-14654",
  storageBucket: "pokemon-14654.appspot.com",
  messagingSenderId: "745713778037",
  appId: "1:745713778037:web:0162599c5310b35fe8273c",
  measurementId: "G-B4RYD7DW9P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

createApp(App).mount("#app");

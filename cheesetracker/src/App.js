import "./App.css";
import MyAppBar from "./components/MyAppBar";
import ResponseForm from "./components/ResponseForm";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpY3SEp6Z2ts7mYuTEVc32-kfPQunVemw",
  authDomain: "goodluckhavecheese.firebaseapp.com",
  projectId: "goodluckhavecheese",
  storageBucket: "goodluckhavecheese.appspot.com",
  messagingSenderId: "389835653569",
  appId: "1:389835653569:web:72770b7fdd1915cf906f40",
  measurementId: "G-V47YP85PN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div>
      <MyAppBar />

      <ResponseForm />
    </div>
  );
}

export default App;

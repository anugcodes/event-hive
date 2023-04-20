import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
//   measurementId: import.meta.env.VITE_MEASUREMENTID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBK-Z3Ka_u6IYPOzlkNuRzsip85-81FxKQ",

  authDomain: "my-event-hive.firebaseapp.com",

  projectId: "my-event-hive",

  storageBucket: "my-event-hive.appspot.com",

  messagingSenderId: "585852421651",

  appId: "1:585852421651:web:5a539b7bf5374c449de1e6",

  measurementId: "G-WNP4T69QNL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

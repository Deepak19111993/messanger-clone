// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBhNbKOR4OpjTEKanDjVbRqxkkEYZB8k9I",
//   authDomain: "messanger-ccca3.firebaseapp.com",
//   projectId: "messanger-ccca3",
//   storageBucket: "messanger-ccca3.appspot.com",
//   messagingSenderId: "950147654876",
//   appId: "1:950147654876:web:4e6e3af1a37d1ace024019",
//   measurementId: "G-14XCN3W6FC",
// };

// // Initialize Firebase
// const db = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// export default db;
// import "firebase/firestore";
// const firebase = require("firebase/app");
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import firebase from "firebase";

// import { initializeApp } from "firebase";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBhNbKOR4OpjTEKanDjVbRqxkkEYZB8k9I",
  authDomain: "messanger-ccca3.firebaseapp.com",
  projectId: "messanger-ccca3",
  storageBucket: "messanger-ccca3.appspot.com",
  messagingSenderId: "950147654876",
  appId: "1:950147654876:web:4e6e3af1a37d1ace024019",
  measurementId: "G-14XCN3W6FC",
});
console.log({ firebaseApp });

// const auth = firebaseApp.auth();
const db = getFirestore(firebaseApp);

export default db;

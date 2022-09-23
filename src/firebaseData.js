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
  // apiKey: "AIzaSyBhNbKOR4OpjTEKanDjVbRqxkkEYZB8k9I",
  // authDomain: "messanger-ccca3.firebaseapp.com",
  // projectId: "messanger-ccca3",
  // storageBucket: "messanger-ccca3.appspot.com",
  // messagingSenderId: "950147654876",
  // appId: "1:950147654876:web:4e6e3af1a37d1ace024019",
  // measurementId: "G-14XCN3W6FC",
  // apiKey: "AIzaSyCBN93zwWUhmWqMQgxMBZwpzf897rcROPY",
  // authDomain: "messanger-clone-ddd94.firebaseapp.com",
  // projectId: "messanger-clone-ddd94",
  // storageBucket: "messanger-clone-ddd94.appspot.com",
  // messagingSenderId: "1011662532449",
  // appId: "1:1011662532449:web:3d8c88964047fc231f9f20",
  // measurementId: "G-E6PP8N1H9R",
  apiKey: "AIzaSyDPU77NE6BN6AvxbAxH78Byd2yk90C5nH8",
  authDomain: "firechat-2ca61.firebaseapp.com",
  projectId: "firechat-2ca61",
  storageBucket: "firechat-2ca61.appspot.com",
  messagingSenderId: "892793599059",
  appId: "1:892793599059:web:c7cac35a4aa594ac8602a6",
  measurementId: "G-NRL0QLQDXC",
});
console.log({ firebaseApp });

// const auth = firebaseApp.auth();
const db = getFirestore(firebaseApp);

export default db;

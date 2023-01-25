// import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyAwXebNZMHWVuvz6XBZh8Ugp4MbGTMm0d4",
//   authDomain: "sigma-mpr-app.firebaseapp.com",
//   projectId: "sigma-mpr-app",
//   storageBucket: "sigma-mpr-app.appspot.com",
//   messagingSenderId: "1069496055364",
//   appId: "1:1069496055364:web:84be3b75c0e334dda6ee11",
//   measurementId: "G-61RXW7B1BX"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
    
//     signInWithPopup(auth, provider).then((result) => {
//         console.log(result);
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         console.log(credential);
//         // const token = credential.accessToken;
//         // const user = result.user;
//     })
//     .catch((error) => {
//         // const errorCode = error.code;
//         // const errorMessage = error.message;
//         // const email = error.email;
//         // const credential = GoogleAuthProvider.credentialFromError(error);
//         console.log(error);
//     })
// };

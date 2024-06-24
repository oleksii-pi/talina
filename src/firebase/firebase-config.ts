import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  setPersistence, 
  browserLocalPersistence
 } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCQ92nmLB3WhWmNP3wpTKy2ENb4qVuyFQ0",
  authDomain: "talina-a.firebaseapp.com",
  projectId: "talina-a",
  storageBucket: "talina-a.appspot.com",
  messagingSenderId: "142056764053",
  appId: "1:142056764053:web:72a231e90feb78ebbde19c",
  measurementId: "G-0HFL08B9YH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

(async () => {
  await setPersistence(auth, browserLocalPersistence)
})();



import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";


  const firebaseConfig = {
    apiKey: "AIzaSyDl854tZLK8aRXeHCO-dSwXQLU5fOj0_Xg",
    authDomain: "iiec-website-2023.firebaseapp.com",
    databaseURL: "https://iiec-website-2023-default-rtdb.firebaseio.com",
    projectId: "iiec-website-2023",
    storageBucket: "iiec-website-2023.appspot.com",
    messagingSenderId: "764726839332",
    appId: "1:764726839332:web:01bf3cbfb83842e2b830b1",
    measurementId: "G-WVQ2M25DJR"
  };
  const app = initializeApp(firebaseConfig);
 
export const db = getFirestore(app)

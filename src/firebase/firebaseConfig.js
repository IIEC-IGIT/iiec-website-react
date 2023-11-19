
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
	apiKey: "AIzaSyB5JGhPu9KJ4z9vB2o1Qv_WSPG2y8cy5DU",
	authDomain: "iiec-igit.firebaseapp.com",
	databaseURL: "https://iiec-igit-default-rtdb.firebaseio.com",
	projectId: "iiec-igit",
	storageBucket: "iiec-igit.appspot.com",
	messagingSenderId: "154632547451",
	appId: "1:154632547451:web:8569a7e40a0d10313206de",
	measurementId: "G-27RWFEQS15",
};
  const app = initializeApp(firebaseConfig);
 
export const db = getFirestore(app)

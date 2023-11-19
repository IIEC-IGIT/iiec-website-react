import { initializeApp } from "firebase/app";
import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
} from "firebase/firestore";

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

const db = getFirestore(app);

class FirestoreWrapper {
	constructor() {
		this.db = db;
	}

	async getCollection(path) {
		try {
			return (await getDocs(collection(this.db, path))).docs.map(
				(doc) => ({
					_id: doc.id,
					...doc.data(),
				})
			);
		} catch (error) {
			console.error(error);
			return [];
		}
	}

	async getDocument(path) {
		try {
			await getDoc(doc(this.db, path)).then((doc) => {
				if (doc.exists()) {
					return { _id: doc.id, ...doc.data() };
				} else {
					return {};
				}
			});
		} catch (error) {
			console.log(error);
			return {};
		}
	}
}

export const firestore = new FirestoreWrapper();

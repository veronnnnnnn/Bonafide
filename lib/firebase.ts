import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  query,
  where,
  addDoc,
  arrayUnion,
} from "firebase/firestore";
import { Post } from "../types/Post";
import { PostComment } from "../types/Comment";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firebase constants
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
const DATE_NOW = new Date().toLocaleString();

export default class Firebase {
  //GET: Get all posts
  //Returns an array of all posts.
  async getPosts() {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const posts: any[] = [];
      querySnapshot.forEach((doc) => {
        //Set id to the doc id
        const data = doc.data();
        data.post_id = doc.id;
        posts.push(data);
      });

      return posts;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async addComment(id: string, comment: PostComment) {
    try {
      const docRef = doc(db, "posts", id);
      await updateDoc(docRef, {
        comments: arrayUnion(comment),
      });
      return { status: 200 };
    } catch (error) {
      console.log(error);
      return { status: 500 };
    }
  }

  //POST: Create post
  //Returns 200 if successful, 500 if there is an error.
  async createPost(post: Post) {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        ...post,
      });
      await updateDoc(docRef, {
        post_id: docRef.id,
      });
      return { status: 200 };
    } catch (error) {
      console.log(error);
      return { status: 400 };
    }
  }
}

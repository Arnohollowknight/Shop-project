import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { API_KEY } from '../config';


const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'shop-6d667.firebaseapp.com',
  projectId: 'shop-6d667',
  storageBucket: 'shop-6d667.appspot.com',
  messagingSenderId: '7437627393',
  appId: '1:7437627393:web:18c70062dfc0b90ee01000'
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionRef = collection(db, 'CupsAndDishes');





export { collectionRef };
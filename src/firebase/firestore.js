import {db} from './firebaseconfig.js'
import {collection, addDoc} from "firebase/firestore";

const createOrder = (orderData) => {
    addDoc(collection(db, 'orders'), {
        ...orderData
    })
}

export {
    createOrder
}
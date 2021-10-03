import { collection, getDocs } from 'firebase/firestore/lite';

export const getMessages = async(db) => {
    const messagesCollection = collection(db, 'teste')
    const messagesSnapShot = await getDocs(messagesCollection)
    const messagesList = messagesSnapShot.docs.map(doc => doc.data())
    console.log(messagesList)
    return messagesList
}

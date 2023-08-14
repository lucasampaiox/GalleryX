import { collection, onSnapshot, orderBy, query} from 'firebase/firestore';
import { useEffect } from 'react';
import {useState} from 'react'
import { db } from '../firebase/config';

type Image = {
  createdAt: Date,
  userEmail: string,
  imageUrl: string,
}

const useFirestore = (colletionName: string) => {
  const [docs, setDocs] = useState<Image[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    let unsubscribe: () => void

    const getData = async ()  => {
      try{
        const q = query(collection(db, colletionName), orderBy("createdAt", "desc"));
         unsubscribe = onSnapshot(q, (querySnapshot) => {
          const images: Image[] = [];
          querySnapshot.forEach((doc) => {
            const imageUrl = doc.data().imageUrl;
            const createdAt = doc.data().createdAt.toDate();
            const userEmail = doc.data().userEmail;
            images.push({imageUrl, createdAt, userEmail})
          });
          setDocs(images);
          setIsloading(false);
        });

      }catch(error){
        console.error(error);
        setIsloading(false);
      }
    }

    getData();
    return () => unsubscribe && unsubscribe();
  }, [colletionName])

  return {
    docs, isLoading
  };
};

export default useFirestore

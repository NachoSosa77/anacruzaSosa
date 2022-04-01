//import { stock } from "../../data/stock";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

 export const pedirDatos = ()=>{

/* useEffect(() => {
    const getData = async () => {
      const query = collection(db, "items");
      const response = await getDocs(query);
      console.log("respuesta", response);
      const dataItems = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log("data items", dataItems);
    };
    getData();
  }, []); */

}
import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import 'firebase/firestore';
import firebaseConfig from '../Firebase'
import MovieDBList from '../MovieDBList'



function MyMovies() {

    const { currentUser } = useContext(AuthContext);

    const [spells, setSpells] = useState([])
    const [genreId, setGenreId] = useState()
    const [category, setCategory] = useState()

    useEffect(() => {
    
        const db = firebaseConfig.firestore()
        // The snapshot object takes a callback function, but we cant use map method, we have to use forEach to iterate through it
        // the return plays a role of a clean-up function 
        return  db.collection('spells').where("userId", "==", firebaseConfig.auth().currentUser.uid).onSnapshot(snapshot => {
            const spellsData =[]
            // The ...data gets all the data from before, but then we also add an id, so the spells can contain an ID field
            // push each document into the spellsData array, and then set our spells to be equal to that aray, so we can later map through it
            snapshot.forEach(doc => spellsData.push(({...doc.data(),id: doc.id})))
            setSpells(spellsData)
        })
      //   const data = await db.collection('spells').get()
      //   setSpells(data.docs.map(doc =>({ ...doc.data(), id: doc.id})))
      
  },[])
    

    return (
        <div>
            <h1>Hi {currentUser.email}</h1>
           <table className="table">
        <tbody>
            <tr>
            {spells.map(spell=>(
              <MovieDBList spell ={spell} key={spell.id}/>
            ))}
            </tr>
            </tbody>
            </table>
        </div>
    );
}

export default MyMovies;



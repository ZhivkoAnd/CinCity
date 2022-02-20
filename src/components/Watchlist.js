import React,{useEffect, useState} from 'react';
import styled from 'styled-components'
import Header from './ui/Header'
import firebaseConfig from './Firebase'
import 'firebase/firestore';
import MovieDB from './MovieDB';
import SmallMovie from './SmallMovie'




const Watchlist = () => {

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
    
    // const onCreate = () => {
    // const db = firebaseConfig.firestore()
    // // Here we just add the object into the database
    // db.collection('spells').add({name:newSpellName})
    // }

    return (
        <>
       <Header setGenreId={setGenreId} sortCategory={setCategory}/>
        <Heading><h1>My WatchList</h1></Heading>

  
            {/* The input has an onChange that will set the value field to be the new value, when created. */}
            {/* <input value = {newSpellName} onChange = {e => setNewSpellName(e.target.value)}/>
            <button onClick={onCreate}>Create</button> */}
            <div className='container movielist'>
            {spells.map(spell=>(
              <MovieDB spell ={spell} key={spell.id}/>
            ))}
                {/* {spells.map(spell=>(
              <SmallMovie spell ={spell} key={spell.id}/>
            ))} */}
            </div>
        </>
    );
}


export default Watchlist;

const Heading = styled.div`
display:flex;
justify-content:center;
h1 {
    margin-top:30px;
    font-family: 'Roboto';
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 2.5rem;
    color: #e3b70f;

}

`
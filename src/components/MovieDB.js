import React from 'react';
import firebaseConfig from './Firebase'
import styled from 'styled-components'

const CRUDops =({spell})=> {

const onDelete = () => {
    const db = firebaseConfig.firestore()
    db.collection('spells').doc(spell.id).delete()
}

    return (
       <>
       {/* controlled forms (why value={name} ?) */}
       {/* When we change the input, set the value to be equal to that change */}
       <MovieWrapper>
             <img src= {spell.poster_src} alt='movie'/>
             <h1 align='center'>{spell.title}</h1>
             <h5>{spell.vote_average}<i className='fas fa-star grey-text ml-3'></i></h5>
             <button onClick={onDelete}>Delete</button>
       </MovieWrapper>
       </>
    );
}

export default CRUDops;

const MovieWrapper = styled.div`
margin-right:10px;
margin-left:10px;
margin-top:25px;
padding:15px;
flex:1;
background-color:#1a1a1a;
flex-direction: column;
display:flex;
justify-content:space-between;
border-radius:5px;
box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12) !important;

/* position:relative; */


h1 {
    font-size:1.1rem;
    text-align:left;
    cursor: pointer;
    color:white;
    margin-bottom:15px;
}

h5 {
    color:white;
    font-size:1rem;
    margin-bottom:20px;
}
img {
    height:278px;
    width:185px;
    cursor: pointer;
    margin-bottom:15px;
}
.fas.fa-heart.grey-text.ml-3 {
    color: grey;
    -webkit-transition: all 0.2s ease-in-out;
     transition: all 0.2s ease-in-out;
}
.fas.fa-heart.grey-text.ml-3:hover {
    color: red;
}
.fas.fa-star.grey-text.ml-3 {
    color:#F5C518;
}


button {
    cursor: pointer;
    width:100%;
    padding:10px;
    background:rgba(255,255,255,0.08);
    border:none;
    color:white;
    font-family:'roboto';
    font-size:0.9rem;
    -webkit-transition: all 0.2s ease-in-out;
     transition: all 0.2s ease-in-out;
     border-radius:5px;
}

button:hover {
background:rgba(255,255,255,0.15);
}

button:hover .fas.fa-heart.grey-text.ml-3 {
   color: #990000 !important;
}
`
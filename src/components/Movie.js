import React,{useContext,useState} from 'react';
import styled from 'styled-components'
import firebaseConfig from './Firebase'
import 'firebase/firestore';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { AuthContext } from "../components/AuthContext";


function Movie({movie}) {

    const { currentUser } = useContext(AuthContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Clicked = () => {
     const url = 'https://www.themoviedb.org/movie/' + movie.id
     window.open(url, '_blank'); // <- This is what makes it open in a new window.
    }

    const onCreate = () => {
        const db = firebaseConfig.firestore()
        // Here we just add the object into the database
        if(currentUser) {
            db.collection('spells').add({title:movie.title, vote_average:movie.vote_average, poster_src: movie.poster_src,userId: firebaseConfig.auth().currentUser.uid})
            handleShow()
        } else {
            handleShow()
        }
        }

const LoggedinHeading = `${movie.title} added to watchlist`
const LoggedoutHeading = `Sign in to add movies to your watchlist`
    
    return (
      
        <MovieWrapper>
            <img src= {movie.poster_src = 'https://image.tmdb.org/t/p/w185/' + movie.poster_path} alt='movie' onClick = {Clicked}/>
            <h1 align='center' onClick = {Clicked}>{movie.title}</h1>
            <h5>{movie.vote_average}<i className='fas fa-star grey-text ml-3'></i></h5>
           <button onClick={onCreate}>Watchlist<i className='fas fa-heart grey-text ml-3'></i></button>
            
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{currentUser ? LoggedinHeading : LoggedoutHeading}</Modal.Title>
            </Modal.Header>
                <Modal.Footer>
               {!currentUser ? <Button variant="secondary" onClick={handleClose}>
                    Login
                </Button> : '' } 
                 <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
            </Modal>

        </MovieWrapper>
        
    );
}

export default Movie;


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
box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);

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
   color: #f5c518 !important;
}
`
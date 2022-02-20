import React from 'react';
import firebaseConfig from './Firebase'
import styled from 'styled-components'

const MovieDBList =({spell})=> {

const onDelete = () => {
    const db = firebaseConfig.firestore()
    db.collection('spells').doc(spell.id).delete()
}

    return (
       <>
       {/* controlled forms (why value={name} ?) */}
       {/* When we change the input, set the value to be equal to that change */}
       <Wrap>
            <td >{spell.vote_average}<i className='fas fa-star grey-text ml-3' style={{color:'#e2b617'}}></i></td>
            <td>{spell.title}</td>
            <td> <button onClick={onDelete}>X</button></td>
      </Wrap>   
       </>
    );
}

export default MovieDBList;

const Wrap = styled.div `
img {
    height:20px;
    width:20px;
    position: fixed;
margin: 0;
left: 3%;
top: 10%;
}
`


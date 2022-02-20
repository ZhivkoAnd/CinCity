import React from 'react';
import spinner from '../../img/spinner.gif'
import styled from 'styled-components'

const Spinner = () => {
    return (
        <SpinnerWrap>
       <img src={spinner} style={{width:'150px', margin:'auto', display:'block'}} alt='loading'/>
       </SpinnerWrap>
    );
}

export default Spinner ;

const SpinnerWrap = styled.div `
width:100vw;
height: 80vh;
display: flex;
justify-content:center;
align-items:center;
position:fixed;
`
import React,{useState,useContext} from 'react'
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../img/logo.png'
import {Link} from 'react-router-dom'
import firebaseConfig from '../Firebase'
import { AuthContext } from "../AuthContext";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



const Header = ({getQuery,ClickDate,ClickVotes,setGenreId, sortCategory}) => {

const [query,setQuery] = useState('')
const { currentUser } = useContext(AuthContext);

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const onChange = (query) => {
    setQuery(query)
    getQuery(query)
}

const signOutButton = {}

if (!currentUser) {
  signOutButton.display='none'
} 

const signInButton = {}

if (currentUser) {
  signInButton.display='none'
} 

const signOut = () => {
  firebaseConfig.auth().signOut()
  handleShow()
}

    return(
  <>
    <Navbar className='navbar' expand="lg">
     <div className='container'>
       <Navbar.Brand as = {Link} to ='/'><img src={logo} className='logo' alt='logo'/></Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav>
         <NavDropdown title="Categories" id="basic-nav-dropdown">
         <NavDropdown.Item as={Link} to= '/' onClick={() => sortCategory('popular')}>Popular</NavDropdown.Item>
         <NavDropdown.Item as={Link} to= '/' onClick={() => sortCategory('top_rated')}>Top-rated</NavDropdown.Item>
         <NavDropdown.Item as={Link} to= '/' onClick={() => sortCategory('upcoming')}>Upcoming</NavDropdown.Item>
             {/* <NavDropdown.Divider />
             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
           </NavDropdown> 
           <NavDropdown title="Sort By" id="basic-nav-dropdown">
             <NavDropdown.Item onClick={ClickVotes}>Highest Rating</NavDropdown.Item>
             <NavDropdown.Item onClick={ClickDate}>Release Date</NavDropdown.Item>
           </NavDropdown> 
           <NavDropdown title="Genres" id="basic-nav-dropdown" className='genresmenu'>
             <div className='dropdown-col' style={{borderRight:'1px solid #F5C518'}}>
           <NavDropdown.Item as={Link} to= '/' onClick={() => setGenreId('28')}>Action</NavDropdown.Item>
           <NavDropdown.Item as={Link} to= '/'  onClick={() => setGenreId('12')}>Adventure</NavDropdown.Item>
           <NavDropdown.Item as={Link} to= '/'  onClick={() => setGenreId('16')}>Animation</NavDropdown.Item>
             <NavDropdown.Item as={Link} to= '/'  onClick={() => setGenreId('35')}>Comedy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to= '/'  onClick={() => setGenreId('80')}>Crime</NavDropdown.Item>
             <NavDropdown.Item as={Link} to= '/'  onClick={() => setGenreId('99')}>Documentary</NavDropdown.Item>
             <NavDropdown.Item as={Link} to= '/'  onClick={() => setGenreId('18')}>Drama</NavDropdown.Item>
              <NavDropdown.Item as={Link} to= '/'  onClick={() => setGenreId('10751')}>Family</NavDropdown.Item>
              <NavDropdown.Item as={Link} to= '/'  onClick={() => setGenreId('14')}>Fantasy</NavDropdown.Item>
              </div>
              <div className='dropdown-col'>
               <NavDropdown.Item as={Link} to= '/'  onClick={() => setGenreId('27')}>Horror</NavDropdown.Item>
               <NavDropdown.Item as={Link} to= '/' onClick={() => setGenreId('10402')}>Music</NavDropdown.Item>
              <NavDropdown.Item as={Link} to= '/'  onClick={() => setGenreId('9648')}>Mystery</NavDropdown.Item>
               <NavDropdown.Item as={Link} to= '/'  onClick={() => setGenreId('10749')}>Romance</NavDropdown.Item>
              <NavDropdown.Item as={Link} to= '/'  onClick={() => setGenreId('878')}>Science Fiction</NavDropdown.Item>
               <NavDropdown.Item as={Link} to= '/'  onClick={() => setGenreId('10770')}>TV Movie</NavDropdown.Item>
               <NavDropdown.Item as={Link} to= '/'  onClick={() => setGenreId('53')}>Thriller</NavDropdown.Item>
              <NavDropdown.Item as={Link} to= '/'  onClick={() => setGenreId('10752')}>War</NavDropdown.Item>
               <NavDropdown.Item as={Link} to= '/'  onClick={() => setGenreId('37')}>Western</NavDropdown.Item>
              </div>
           </NavDropdown> 
           <Searchinput>
            <input placeholder = 'Seach for a movie here' className='form-control' onChange={e => onChange(e.target.value)} value={query} type='text'></input>
            {/* <i class="fas fa-search"></i> */}
           </Searchinput>
           <div className ='menuitems'>
           <Nav.Link as={Link} to='/watchlist'>Your Watchlist</Nav.Link>
           <Nav.Link as={Link} to='/login' style={signInButton}>Sign in</Nav.Link>
           <Nav.Link onClick={() => signOut()} color="inherit" style={signOutButton} >Sign Out</Nav.Link>
           </div>
         </Nav>
       </Navbar.Collapse>
       </div>
     </Navbar>


     <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>You have logged out</Modal.Title>
            </Modal.Header>
                <Modal.Footer>
                 <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
            </Modal>
     </>
    )
}

export default Header

const Searchinput = styled.div `
width:44%;
input[type='text'] {
    display: block;
  padding: 10px;
  border: 0;
  border-radius: 5px;

  }

`
  
  
  
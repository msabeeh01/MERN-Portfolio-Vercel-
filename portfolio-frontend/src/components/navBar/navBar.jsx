import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//custom styling
import './navBar.css';

function Title(){
  return(
    <div className='titleContainer'>
      <h2 className='title'><a href='/' style={{color:'white', textDecoration:'none'}}>portfolio</a></h2>
    </div>
  )
}

//nav link components
const NavLink = (props) => {
  return(
  <Nav.Link href={props.link}> {props.name}</Nav.Link>
  )
}

//compile dropdown contents
const NavDropdownComp = (props) =>{
  return(
    <NavDropdown title={props.title} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
  )
}

//compile nav contents
const NavComp = (props) =>{
  return(
    <Nav className="me-auto">
      <NavLink name= 'Home' link= '/' />
      <NavLink name= 'About' link= '/about' />
      <NavDropdownComp title= 'Projects' />
  </Nav>
  )
}

function NavBar() {
  return (
    <>
    <Title />
    <Navbar className="navbar-cus" expand="lg" sticky='top' bg={{ light: '#f8f9fa', dark: '#343a40' }} variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavComp />
        </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default NavBar;
import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location = "/login"
    }
    render(){
        return(
            <Navbar bg="info" variant="dark">
            <Navbar.Brand href="">Praktikum 1</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link> <Link class="text-white" to='/'>Home </Link> </Nav.Link>
            <Nav.Link> <Link class="text-white" to='/pegawai'>Pegawai </Link> </Nav.Link>
            <Nav.Link> <Link class="text-white" to='/siswa'>Siswa </Link> </Nav.Link>
            <Nav.Link> <Link class="text-white" to='/pelanggaran'>Pelanggaran </Link> </Nav.Link>
            <Nav.Link onClick={() => this.Logout()}><Link class="text-white" to='/login'>Logout </Link></Nav.Link>
            </Nav>
          </Navbar>
        )
    }
}
export default NavBar;

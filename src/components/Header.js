import React, {Component} from 'react'
import {Link, Router} from 'react-router-dom'
import API from '../configs/API'
import {axiosGet} from '../axios'

import {Navbar, Nav, NavDropdown, Badge, Container} from 'react-bootstrap'
import logo from '../assets/img/logo-white.png';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            categories: []
        }
    }
    componentDidMount(){
        this.getCategories();
    }

    getCategories(){
        axiosGet(API.BOOK_CATEGORY.LIST)
                .then(result =>{
                    this.setState({
                        categories: result.data.categories
                    })
                })
                .catch(error => {
                    console.log(error)
                })
    }

    render(){
        const {categories} = this.state;

        return <Navbar id="mainnav" variant="light" expand="lg">
            <Container>
                <Link to="/" className="navbar-brand">
                    <img src={logo} />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Trang chủ</Link>
                    <Link to="/books" className="nav-link">Tìm sách</Link>
                    <NavDropdown alignRight title="Danh mục" id="basic-nav-dropdown">
                        {categories && categories.map((category,index)=>
                        {
                            return <Link key={category.id} to={'/categories/'+category.id} className="dropdown-item">{category.title}</Link>
                        }
                        )}
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    }
}

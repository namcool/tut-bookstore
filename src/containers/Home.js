import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import { Layout } from '../components/Layout';
import BookPanel from '../components/BookPanel'
import {Panel} from '../components/Panel'

import API from '../configs/API';
import {axiosGet} from '../axios';

import sidebar from '../assets/img/banners/sidebar.png';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            bestsellers: [],
            newReleases: [],
            categories: []
        }
    }

    componentDidMount(){
        this.getCategories();
        this.getBestSellers();
        this.getNewReleases();
    }

    getCategories(){
        axiosGet(API.BOOK_CATEGORY.LIST)
                    .then(result => {
                        this.setState({
                            categories: result.data.categories
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    });
    }

    getBestSellers(){
        axiosGet(API.HOME.BEST_SELLERS)
                    .then(result=>{
                        this.setState({
                            bestsellers: result.data.books
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
    }

    getNewReleases(){
        axiosGet(API.HOME.NEW_RELEASES)
                    .then(result => {
                        this.setState({
                            newReleases: result.data.books
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
    }
    

    render(){
        const {bestsellers, newReleases, categories} = this.state;
        return <Layout>
            <div className="homepage">
                <Container>
                    <Row>
                        <Col md={9}>
                            <BookPanel books={bestsellers} title="Xu hướng" page="/books"></BookPanel>
                            <BookPanel books={newReleases} title="Sách mới" page="/books"></BookPanel>
                        </Col>
                        <Col md={3}>
                            <Panel className="panel-menu" title="Danh mục">
                                <ul className="list-group">
                                    {categories && categories.map(c => {
                                        return <li key={c.id} className="list-group-item">
                                            <Link to={"/categories/"+c.id}>
                                                    {c.title}
                                            </Link>
                                        </li>
                                    })}
                                </ul>
                            </Panel>
                            <div className="mt-30">
                                <img className="w-100" src={sidebar} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    }
}
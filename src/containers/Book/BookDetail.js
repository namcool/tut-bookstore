import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Table} from 'react-bootstrap';
import { Layout } from '../../components/Layout';
import BookPanel from '../../components/BookPanel'
import {Panel} from '../../components/Panel'
import numeral from 'numeral'

import API from '../../configs/API';
import {axiosGet} from '../../axios';


export default class BookDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            qty: 1,
            book: null
        };
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        this.getBookDetai(id);
    }

    getBookDetai(id){
        axiosGet(API.BOOK.GET.replace(":id",id))
                    .then(result => {
                        this.setState({
                            currentBook: result.data
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    });
    }

    
    
    
    
    
    
    
    
    

    render(){
        const { currentBook } = this.state;
        console.log(currentBook);
        return <Layout>
                {currentBook && <div className="homepage">
                    <Container className="mt-30">
                        <Row>
                            <Col md={4}>
                                <img src={currentBook.image} />
                            </Col>
                            <Col md={8}>
                                <h3>{currentBook.title}</h3>
                                <h4>{numeral(currentBook.price).format(0,0)} VNĐ</h4>
                                <hr />
                                <div className="input-group">
                                    <button type="button" className="btn btn-primary btn-sm mr-1">-</button>
                                    <input type="number" disabled value={this.state.qty} min="1" max="5" style={{witdh: '35px'}}/>
                                    <button type="button" className="btn btn-primary btn-sm ml-1">-</button>
                                    <button type="button" className="btn btn-success ml-3 mr-1">Thêm vào giỏ hàng</button>
                                    <button type="button" className="btn btn-danger ml-1">Mua ngay</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="mt-30">
                        <h3>Thông tin chi tiết</h3>
                        <Row>
                            <Col md={12}>
                                <Table striped bordered hover size="sm">
                                    <tbody>
                                        <tr>
                                            <td>Công ty phát hành</td>
                                            <td>{currentBook.manufacturer}</td>
                                        </tr>
                                        <tr>
                                            <td>Tác giả</td>
                                            <td>{currentBook.author}</td>
                                        </tr>      
                                        <tr>
                                            <td>Ngày xuất bản</td>
                                            <td>{currentBook.publicationDate}</td>
                                        </tr>
                                        <tr>
                                            <td>Loại bìa</td>
                                            <td>{currentBook.bookCover}</td>
                                        </tr>     
                                        <tr>
                                            <td>Kích cỡ</td>
                                            <td>{currentBook.dimensions}</td>
                                        </tr>
                                        <tr>
                                            <td>Số trang</td>
                                            <td>{currentBook.numberOfPage}</td>
                                        </tr>
                                        <tr>
                                            <td>Giá tiền</td>
                                            <td>{numeral(currentBook.price).format(0,0)} VNĐ</td>
                                        </tr>
                                        <tr>
                                            <td>SKU</td>
                                            <td>{currentBook.sku}</td>
                                        </tr>                                                   
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                    
                    <Container className='mt-30' title="Giới thiệu sách">
                        <h4 className="bold">Giới thiệu sách</h4>
                        <Row>
                            <Col md={12}>
                                <p dangerouslySetInnerHTML={{__html: currentBook.content}}></p>
                            </Col>
                        </Row>
                    </Container>
                </div>}
        </Layout>
    }
}
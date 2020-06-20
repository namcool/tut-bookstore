import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import {BookCard} from '../components/BookCard'





class BookPanel extends Component{
    render(){
        const {title, page, books} = this.props;
        return <div className="bg-light pt-3">
                    <div className="heading heading-flex">
                        <div className="heading-left">
                            <h4 className="panel-title">{title}</h4>
                        </div>
                        <div className="heading-right">
                            <Link to={page}>
                                Xem tất cả <i className="icon-long-arrow-right"/>
                            </Link>
                        </div>
                    </div>
                    <Row className="mt-30">
                        {books && books.map((book, index) => {
                            return book &&
                                    <Col md={3} key={index} className="mb-30">
                                        <BookCard book={book}/>
                                    </Col>
                        })}
                    </Row>
                </div>
    }
}
export default BookPanel
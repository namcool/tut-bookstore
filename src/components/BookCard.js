import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Button, Badge} from 'react-bootstrap'

import numeral from 'numeral'

export const BookCard = ({book}) => {
    return <Card style={{ width: '100' }}>
                <Link to={"/book/"+book.id}>
                    <Card.Img variant="top" src={book.image} />
                </Link>
                <Card.Body>
                    <Link to={"/book/"+book.id}>
                        <Card.Title>{book.title}</Card.Title>
                    </Link>
                    <Card.Text>
                        {book.author}
                    </Card.Text>
                    <Card.Text className="card-price text-bold">
                        {numeral(book.price).format(0,0)} VNĐ
                    </Card.Text>
                </Card.Body>
            </Card>
}
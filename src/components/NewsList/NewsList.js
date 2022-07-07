import '../NewsList/NewsList.css'

import { useEffect } from 'react'
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { fetchNews } from '../../redux/news/action'

import { useDispatch, useSelector } from 'react-redux'

const NewsList = () => {

    const dispatch = useDispatch()  
    const newsList = useSelector(state => state.newsReducer) 
    const { news, loading, error} = newsList

    useEffect(() => {
        dispatch(fetchNews())
    },[dispatch])
    
    return(
        <Container>
            <Row>
            {loading ? <div className="spinner-wrapper"><Spinner animation="border" /></div>
            : error ? 
                <Alert variant="danger">
                {error}
                </Alert>
                :    news.map((item,index) => (
                        <Col md={4} key={index}>
                            <Card className="single-photo text-center" style={{margin : "10px 0"}}>
                                <Card.Img variant="top" src={item.urlToImage ? item.urlToImage :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_GnE4JR24hH9N9HgZaZWYjYR-XZawrqPtQ&usqp=CAU'} className="img"/>
                                <Card.Body>
                                <Card.Title className="title">{item.title.length > 80 ? `${item.title.slice(0,80)}...` : item.title}</Card.Title>
                                <Card.Text className="text">
                                {item.description && (item.description.length > 150 ? `${item.description.slice(0,150)}...` : item.description)}
                                </Card.Text>
                                <Link className="btn btn-dark" to={`/news/${index}`}>Read More</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    
                ))
            } 
            </Row>
            

        </Container>
    )

}

export default NewsList;
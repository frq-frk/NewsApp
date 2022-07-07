import { Container, Row, Col, Card } from 'react-bootstrap'

import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'

const SingleNews = () => {

    const newsList = useSelector(state => state.newsReducer)

    const { news } = newsList

    const {id} = useParams();

    const item = news && id && news[id];

    return(
        <Container>
            <Row>
                {item && 
                <Col md={{span : '10', offset:'1'}}>
                    <Card className="single-photo" style={{margin : "10px 0"}}>
                        <Card.Img variant="top" src={item.urlToImage ? item.urlToImage :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_GnE4JR24hH9N9HgZaZWYjYR-XZawrqPtQ&usqp=CAU'} className="img"/>
                        <Card.Body>
                        <Card.Title className="title">{item.title.length > 80 ? `${item.title.slice(0,80)}...` : item.title}</Card.Title>
                        <Card.Text className="text">
                        {item.description && (item.description.length > 150 ? `${item.description.slice(0,150)}...` : item.description)}
                        <a href={item.url}>Read More</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                }
            </Row>
        </Container>
    )

}

export default SingleNews;
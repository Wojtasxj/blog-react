import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAllPosts } from './../../store/postsRedux';

const HomePage = () => {
  const allPosts = useSelector(getAllPosts);

  return (
    <Container>
        <h1>All Posts</h1>
        <Row>
            {allPosts.map(post => (
                <Col md={4} key={post.id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text><b>Author:</b> {post.author}</Card.Text>
                                <Card.Text><b>Published:</b> {post.publishedDate}</Card.Text>
                                <Card.Text>{post.shortDescription}</Card.Text>
                                <Button variant="primary" href={`/post/${post.id}`}>Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                
            ))}
        </Row>
    </Container>
  );
}

export default HomePage;
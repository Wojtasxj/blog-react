
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import Col from'react-bootstrap/Col';
import { removePost } from './../../store/postsRedux';

const PostPage = () => {
  const { id } = useParams();
  //const history = useHistory();
  const dispatch = useDispatch();
  const post = useSelector(state => state.posts.find(post => post.id === id));

  //const handleEditClick = () => {
  //  history.push(`/post/edit/${id}`);
  //};

  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      dispatch(removePost(id));
      if(!post) return <Navigate to="/" />
      else return <Navigate to={`/post/${post.id}`} />
     }
  };

  return (
    <div>
      {post ? (
        <Container>
          <Row className="justify-content-md-center">
            <Col><h2>{post.title}</h2></Col>
            <Col xs lg="1"><Button variant="outline-info" href={`/post/edit/${post.id}`} >Edit</Button>{' '}</Col>
            <Col xs lg="1"><Button variant="outline-danger" onClick={handleDeleteClick} >Delete</Button></Col>
          </Row>
            <p><b>Author:</b> {post.author}</p>
            <p><b>Published:</b> {post.publishedDate}</p>
            <p>{post.content}</p>
        </Container>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default PostPage;
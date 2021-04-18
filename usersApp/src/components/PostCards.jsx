import React from 'react';
import { Card, CardColumns, Button } from 'react-bootstrap';
import Users from './Users';
import './PostCards.scss';

const PostCards = ({setCards, posts, users}) => {
  return (
    <div className="cardContainer">
      <CardColumns className="cardColums">
        {posts.map((post) =>
          <Card id="card" key={post.id} style={{ width: '16rem' }}>
            <Card.Body>
              <Card.Title>
                {post.title}
              </Card.Title>
              <Card.Text>
                {post.body}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
                <p className="userName">
                  Autor: {<Users user={users.filter((user) => user.id === post.userId)} />}
                </p>
            </Card.Footer>
          </Card>
        )}
      </CardColumns>
      <Button id="btn" onClick={setCards} variant="secondary" >Show more</Button>
    </div>
  );
};

export default PostCards;
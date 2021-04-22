
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import PostCards from './PostCards';

const UserContent = () => {
  const [postsInfo, setPosts] = useState([]);
  const [usersInfo, setUsers] = useState([]);
  const [cardOnPage, setCardOnPage] = useState(5);

  useEffect(() => {
    const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
    const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

    Promise.all([postsPromise, usersPromise]).then(([postsInfo, usersInfo]) => {
      setPosts(postsInfo);
      setUsers(usersInfo);
    }).catch((error) => console.error(error));
  }, []);

  const setCards = () => {
    setCardOnPage(cardOnPage + 5)
  };
  
  if(postsInfo.length === 0 || usersInfo.length === 0) { 
    return(
      <Loading />
    );
  };
  return (
    <>
      <PostCards
        setCards={setCards}
        posts={postsInfo.slice(0, cardOnPage)}
        users={usersInfo} 
      />
    </>
  );
};

export default UserContent;

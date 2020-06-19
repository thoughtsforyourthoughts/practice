import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Comments: React.FC = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        const data = response.data.slice(1, 10);
        setComments(data);
      });
  }, []);

  return (
    <section>
      <h4>Comments</h4>
      <ul>
        {comments.map((comment: UserComments) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Comments;

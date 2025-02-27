import React, { useState, useEffect } from 'react';

const Podcasts = (props) => {

  const [count, setCount] = useState(0);
  const [remove, removePodcast] = useState();

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You voted on this podcast {count} times</p>
      <button onClick={() => setCount(count + 1)}>`Votes: ${count}`</button>
      <button onClick={() => removePodcast(remove)}>X</button>
      <h1>Podcast Episodes</h1>
    </div>
  );
};

export default Podcasts;
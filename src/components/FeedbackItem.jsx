import { useState } from 'react';

function FeedbackItem() {
  const [rating, setRating] = useState(7);
  const [ratingDescription, setRatingDescription] = useState(
    'This is an example of feedback items'
  );

  const handleClick = () => {
    setRating((prev) => {
      return prev + 1;
    });
    setRatingDescription('Updated Feedback description');
  };

  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{ratingDescription}</div>
      <button onClick={handleClick}>Update Rating</button>
    </div>
  );
}

export default FeedbackItem;

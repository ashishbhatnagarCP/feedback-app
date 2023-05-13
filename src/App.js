export const App = () => {
  const title = 'Blog Post';
  const body = 'This is the blog post';
  const comments = [
    { id: 1, text: 'Comment One' },
    { id: 2, text: 'Comment Two' },
    { id: 3, text: 'Comment Three' },
  ];
  const loading = false;
  const showComments = true;
  if (loading) return <h1>loading.....</h1>;
  return (
    <div className='container'>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      <h3>{Math.random() * 10}</h3>

      {showComments && (
        <div className='comments'>
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

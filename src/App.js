import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
export const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <FeedbackItem></FeedbackItem>
      </div>
    </div>
  );
};

import Calendar from '@components/Calendar';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-4">
      {Array.from({ length: 12 }, (_, idx) => (
        <Calendar key={idx} month={idx} />
      ))}
    </div>
  );
};

export default Home;

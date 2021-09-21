import Calendar from '@components/Calendar';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-700 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-5">
      {Array.from({ length: 12 }, (_, idx) => (
        <Calendar key={idx} month={idx + 1} />
      ))}
    </div>
  );
};

export default Home;

import { PropsWithChildren } from 'react';

interface HomeProps extends PropsWithChildren<{}> {}

const Home = ({}: HomeProps) => {
  return (
    <>
      <h1 className='text-red-600 dark:text-blue-600'>Hello from Home</h1>
    </>
  );
};

export default Home;

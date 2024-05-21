// import logo from './logo.svg';

import Navigation from './Navigation';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';
import SeventhPage from './SeventhPage';
import Footer from './Footer';
function Home() {
  return (
    <>
      <Navigation />
      <main>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
        <SixthPage />
        <SeventhPage />
      </main>
      <Footer />
    </>
  );
}

export default Home;
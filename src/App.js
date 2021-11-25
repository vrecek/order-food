import './css/index.css'
import Nav from './components/Nav';
import Header from './components/Header';
import OfferCont from './components/OfferCont';
import Opinions from './components/Opinions';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Header />

      <main>
        <OfferCont />
        <Opinions />
      </main>

      <Footer />

    </div>
  );
}

export default App;

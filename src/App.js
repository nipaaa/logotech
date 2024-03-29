import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Team from './components/Team';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div>
        <Header></Header>
        <Services></Services>
        <Testimonial></Testimonial>
        <Portfolio></Portfolio>
        <Team></Team>
        <Footer></Footer>

       {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}

    </div>
  );
}

export default App;

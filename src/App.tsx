import Layout from './components/Layout';
import Hero from './components/Hero';
import TrendingDestinations from './components/TrendingDestinations';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import './index.css'

function App() {
  return (
    <Layout>
      <Hero />
      <TrendingDestinations />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </Layout>
  );
}

export default App
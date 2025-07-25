import { Container, Carousel } from 'react-bootstrap';
import FeatureCard from './FeatureCard';

function App() {
  const cardData = [
    {
      imageSrc: "/images.jpg",
      title: "First Singer Title",
      description: "Description for the first singer."
    },
    {
      imageSrc: "/waterfall.jpg",
      title: "Second Singer Title",
      description: "Description for the second singer."
    },
    {
      imageSrc: "/images.jpg",
      title: "Third Singer Title",
      description: "Description for the third singer."
    }
  ];

  return (
    <div className="App" style={{ backgroundColor: '#e0e0e0', minHeight: '100vh', padding: '20px 0' }}>
      <Container className="my-5" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h2 className="text-center mb-5">Carousel Using Reusable FeatureCard</h2>

        <Carousel interval={3000}>
          {cardData.map((data, index) => (
            // The Carousel's direct child is Carousel.Item. This is the crucial rule.
            <Carousel.Item key={index} style={{ height: '500px' }}>
              
              {/* Inside the item, we render our clean, reusable FeatureCard component. */}
              <FeatureCard
                imageSrc={data.imageSrc}
                title={data.title}
                description={data.description}
              />

            </Carousel.Item>
          ))}
        </Carousel>

      </Container>
    </div>
  );
}

export default App;
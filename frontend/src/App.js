import { Container, Carousel } from 'react-bootstrap';
import FeatureCard from './FeatureCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const cardData = [
    {
      imageSrc: "/freddiemercury.png",
      title: "freddie mercury",
      description: "one of the best to do it!!!!"
    },
    {
      imageSrc: "/mariahcarrey.png",
      title: "Second Singer Title",
      description: "Description for the second singer."
    },
    {
      imageSrc: "/bruno.png",
      title: "Third Singer Title",
      description: "Description for the third singer."
    }
  ];

  return (
    <>
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>

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
      <div className="App" style={{ backgroundColor: '#e0e0e0', minHeight: '100vh', padding: '20px 0' }}>
        <Container className="my-5" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <h2 className="text-center mb-5">More Content to Make the Page Scroll</h2>
          <p>This is just filler content to ensure the page is long enough to have a scrollbar.</p>
        </Container>
      </div>
    </>
  );
}

export default App;
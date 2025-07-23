import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel } from 'react-bootstrap';
import FeatureCard from './components/FeatureCard'; // Importing the FeatureCard component

function App() {
   const cardData = [
    {
      imageSrc: "/images.jpg",
      title: "Dynamic Feature One",
      description: "Explore the first groundbreaking feature. It's designed to make your experience seamless and intuitive.",
      buttonText: "Learn More",
      buttonVariant: "primary"
    },
     {
      imageSrc: "/images.jpg",
      title: "Dynamic Feature One",
      description: "Explore the first groundbreaking feature. It's designed to make your experience seamless and intuitive.",
      buttonText: "Learn More",
      buttonVariant: "primary"
    },
  ];
  return (
    <div className="app">
      <Container className="my-5">
        <h2 className='mb-5'>the famous singers (the once I love the most!!!!)</h2>
        {/*ანუ აქ ვწერთ წინასწარ გაწერილ ციესესის სტილებს , როგორიცაა დისფლეი ფლექსი , და justify-content:center*/}
        <Carousel indicators={true} interval={null} controls={true}>
          { cardData.map((card_itself , index)=>(
            <Carousel.Item key={index} className='d-flex justify-content-center' >
              <FeatureCard 
              imageSrc={card_itself.imageSrc}
              title={card_itself.title}
              description={card_itself.description}
              buttonText={card_itself.buttonText}
              buttonVariant={card_itself.buttonVariant}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default App;

import { Container, Carousel } from 'react-bootstrap';
import FeatureCard from './FeatureCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState,useEffect} from 'react';
import Observer from './Observer';

function App() {
   const [scrollPercentage, setScrollPercentage] = useState(0); 
      const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const cardData = [
    {
      imageSrc: "/freddiemercury.png",
      title: "freddie mercury",
      description: "one of the best to do it!!!!"
    },
    {
      imageSrc: "/mariahcarrey.png",
      title: "meriah carey",
      description: "she a beauty fs fs"
    },
    {
      imageSrc: "/bruno.png",
      title: "bruno mars",
      description: "love his grenade!!!! don't you told to play for yaaaaa , u know I'd catch a grenade for yaaaaa , hooooo , I would go through all this pain , take a bullet straight through my brain , yes I would die for yaaaaa , baby , but you won't do the same"
    }
  ];

  const handleScroll= ()=>{
    const scrolltop = window.pageYOffset;
    const docheight = document.documentElement.scrollHeight;
    const winheight = window.innerHeight;

    if (scrolltop > 800) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }


    if(docheight- winheight>0){
      const scrolled = (scrolltop / (docheight - winheight)) * 100;
      setScrollPercentage(scrolled);
    }
    else{
      setScrollPercentage(0);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);

  },[])

  return (
    <>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
      </div>

      <header className={`app-header ${isHeaderVisible ? '' : 'header-hidden'}`}>
        <h1>Welcome to My Singers Page</h1>
        <p>Scroll down to discover more!</p>
      </header>
       <Observer>
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
      </Observer>
      <Observer>
      <div className="App" style={{ backgroundColor: '#e0e0e0', minHeight: '100vh', padding: '20px 0' }}>
        <Container className="my-5" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <h2 className="text-center mb-5">More Content to Make the Page Scroll</h2>
          <p>This is just filler content to ensure the page is long enough to have a scrollbar.</p>
        </Container>
      </div>
      </Observer>
    </>
  );
}

export default App;
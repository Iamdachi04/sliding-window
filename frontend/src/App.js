import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

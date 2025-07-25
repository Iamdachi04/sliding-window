import { Carousel } from 'react-bootstrap';
function FeatureCard(props) {
  return (
    <Carousel.Item style={{ minHeight: '300px' }}>
      <img
        className="d-block w-100" 
        src={props.imageSrc}   
        alt={props.title}       
      />
      <Carousel.Caption>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

export default FeatureCard;
import { Carousel } from 'react-bootstrap';
function FeatureCard(props) {
  return (<>
      <img className="d-block w-100" src={props.imageSrc} alt={props.title}
        style={{ height: '700px', objectFit: 'cover' }}
      />
      <Carousel.Caption>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </Carousel.Caption>
    </>
  );
}

export default FeatureCard;
import { Col, Card, Button } from 'react-bootstrap';
//in props  we write source of image , title of image, description of image, button text and button variant
function FeatureCard(props) {
  return (
    <Col>
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src={props.imageSrc} alt={props.title} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button variant={props.buttonVariant}>{props.buttonText}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default FeatureCard;
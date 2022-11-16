import { Card } from 'react-bootstrap';
import './style.css';
import utils from './../../utils';
import MoreInformation from '../MoreInformation';

function MovieCard({ id, title, description, image, director, producer }) {
  return (
    <Card className='movie-card'>
        <Card.Img variant="top" src={ image } />
        <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <Card.Text>
            {
                utils.formatDescription(description)
            }
            </Card.Text>
            <MoreInformation
              id={ id }
              image={ image }
              title={ title }
              description={ description }
              director={ director }
              producer={ producer }
            />
        </Card.Body>
    </Card>
  );
}

export default MovieCard;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.jpg';

export default function AppAbout(){
	const html = 90;
	const resp = 70;
	const photo = 80;
	return (
		
	<section id ="about" className='block about-block'>
		<Container fluid>
			<div className='title-holder'>
				<h2>About Us</h2>
				<div className='subtitle'>Learn more about us</div>
			</div>
			<Row>
				<Col sm={6}>
					<Image src={img1} />
				</Col>
				<Col sm={6}>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
						Quos deserunt sint facilis deleniti sunt. 
						Eligendi facilis quam voluptatum exercitationem culpa. 
						Provident debitis obcaecati ea nisi, quibusdam est nesciunt beatae,
						facere possimus quam accusamus itaque neque quisquam officiis sequi laudantium illo, 
						laboriosam aspernatur quod dolore earum eveniet libero expedita in. Explicabo. 
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Porro placeat amet quas veritatis recusandae sint velit consequatur tempore ad corrupti.</p>
						<div className='progress-block'>
							<h4>HTML / CSS /JAVASCRIPT</h4>
							<ProgressBar now={html} label={`${html}%`} />
						</div>
						<div className='progress-block'>
							<h4>RESPONSIVE</h4>
							<ProgressBar now={resp} label={`${resp}%`} />
						</div>
						<div className='progress-block'>
							<h4>PHOTOSHOP</h4>
							<ProgressBar now={photo} label={`${photo}%`} />
						</div>
				</Col>
			</Row>
		</Container>
	</section>
	)
}
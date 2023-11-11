import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



export default function AppContact(){
	return(
		<section id="contact" className= 'block contact-block'>
			<Container fluid>
				<div className='title-holder'>
					<h2>Contact us</h2>
					<div className='subtitle'>get connected wiht us</div>
				</div>
				<Form className='contact-form'>
      <Row>
        <Col sm={4}>
          <Form.Control type="text" placeholder="Enter your full name" required />
        </Col>
        <Col sm={4}>
          <Form.Control type ="email" placeholder="Enter your email addres" required />
        </Col>
				<Col sm={4}>
          <Form.Control type="tel" placeholder="Enter your contact number" required/>
        </Col>
      </Row>
			<Row>
				<Col sm={12}>
				
        <Form.Control
          as="textarea"
          placeholder="Enter your message"
					required
        />
			</Col>
			</Row>
			<div className='btn-holder'>
			<Button type="submit">Submit</Button>
			</div>
    </Form>
				</Container>
				<div className='google-map'>
				<iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79630.63464027851!2d19.634211538024793!3d51.41302513278724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47198a8ddd272a65%3A0x5ddd057f29a87cce!2sPiotrk%C3%B3w%20Trybunalski!5e0!3m2!1sen!2spl!4v1698471828579!5m2!1sen!2spl"
				allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
				<Container fluid>
					<div className='contact-info'>
						<ul>
							<li>
								<i className="fas fa-envelope"></i>
								hello@domain.com
							</li>
							<li><i className="fas fa-phone"></i>
								000-00-00-000</li>
							<li><i className="fas fa-map-marker-alt"></i>
							Piotrków Trybunalski, Poland	</li>
						</ul>
					</div>
				</Container>
			</section>
	)
}
import React from "react";
import { Container, Navbar, Nav, Card, Row, Col, Carousel } from "react-bootstrap";
import Footer from "./Footer";
function App() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
      image: "https://placehold.it/300x200",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for Product 2",
      image: "https://placehold.it/300x200",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description for Product 1",
      image: "https://placehold.it/300x200",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description for Product 2",
      image: "https://placehold.it/300x200",
    },
  ];

  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Store App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#boutique">Boutique</Nav.Link>
              <Nav.Link href="#home">temoignage</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="https://placehold.it/800x200" alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://placehold.it/800x200" alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Container>
          <div className="heading py-4  ">
            <div className="title">
              <h1 className="">Nos Meilleurs</h1>
            </div>
            <hr></hr>
          </div>

          <Row>
            {products.map((product) => (
              <Col key={product.id}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {/* Add more columns and cards as needed */}
          </Row>
        </Container>

        <Container>
          <div className="heading py-4  ">
            <div className="title">
              <h1 className="">En soldes</h1>
            </div>
            <hr></hr>
          </div>

          <Row>
            {products.map((product) => (
              <Col key={product.id}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {/* Add more columns and cards as needed */}
          </Row>
          <Row className=" py-4">
            {products.map((product) => (
              <Col key={product.id}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    {/* Add more product details as needed */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {/* Add more columns and cards as needed */}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;

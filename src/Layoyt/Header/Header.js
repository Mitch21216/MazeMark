import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Conatiner from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { AiOutlineClose } from "react-icons/ai";
import Carousel from "react-bootstrap/Carousel";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import "./Header.css";

function Header({show,setShow}) {
  const navigate = useNavigate();
  console.log(show);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="i-navBar" fixed="top">
        <Conatiner fluid className="i-nav-container">
          <Navbar.Brand className="i-nav-brand" onClick={() => navigate("/")}>
            <img
              src="https://iaterial.sirv.com/egety-maze-mark/LOGO--color.png"
              width="100"
              height="70"
              alt=""
              className="logo-img"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="i-nav-toggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className="nav-item" onClick={() => navigate("/")}>
                HOME
              </Nav.Link>
              <Nav.Link className="nav-item" id="about-nav-link">
                ABOUT US
                <div
                  className="nav-services-container"
                  id="about-link-container"
                >
                  <Nav.Link
                    className="nav-sub-item"
                    onClick={() => navigate("/about/vision")}
                  >
                    <p className="nav-sub-p">OUR VISION</p>
                  </Nav.Link>
                  <Nav.Link
                    className="nav-sub-item"
                    onClick={() => navigate("/")}
                  >
                    <p className="nav-sub-p">OUR TEAM</p>
                  </Nav.Link>
                </div>
              </Nav.Link>
              <Nav.Link
                className="nav-item"
                id="services-nav-link"
                onClick={() => navigate("/services")}
              >
                SERVICES
              </Nav.Link>
              <Nav.Link className="nav-item" onClick={() => navigate("/")}>
                PORTFOLIO
              </Nav.Link>
              <Nav.Link className="nav-item" onClick={() => navigate("/")}>
                CONTACT US
              </Nav.Link>
              <Nav.Link className="sidebar-nav-item">
                <BsList
                  id="sideBtn"
                  className="nav-btn"
                  onClick={() => setShow(!show)}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Conatiner>
      </Navbar>
      <Container id="sideBtnContainer" fluid className="i-side-bar" style={{ width:show ? '0%' :"25%", opacity:show ? "0" : "1"}}>
        <Row className="side-bar-header-row">
          <AiOutlineClose
            className="side-bar-close-btn"
            onClick={() => setShow(!show)}
          />
        </Row>
        <Row className="side-bar-heading-row"  >
          <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
          <Col className="side-bar-heading-col">
            <h1> Information</h1>
          </Col>
          <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        </Row>
        <Row className="side-bar-text-row">
          <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
          <Col className="side-bar-text-col">
            <p className="side-bar-text-paragraph">
              Populate the side area with widgets, images, and more. Easily add
              social icons linking to your social media pages and make sure that
              they are always just one click away.
            </p>
          </Col>
          <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        </Row>
        <Row className="side-bar-slide-row">
          <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
          <Col className="side-bar-slide-col">
            <Carousel variant="light">
              <Carousel.Item>
                <img
                  className="d-block w-100 slide-img"
                  src="https://iaterial.sirv.com/Images/Cyber%20Security-01.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 slide-img"
                  src="https://iaterial.sirv.com/Images/Cyber%20Security-01.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 slide-img"
                  src="https://iaterial.sirv.com/Images/Cyber%20Security-01.png"
                  alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        </Row>
        <Row className="side-bar-social-row">
          <Col xxl={3} xl={3} lg={3} md={2} sm={1} xs={1}></Col>
          <Col className="socail-col">
            <div className="social-container">
              <a href="#" target="_blank" className="side-social-btn">
                <FaInstagram className="side-social-icon" />
              </a>
              <a href="#" target="_blank" className="side-social-btn">
                <FaTwitter className="side-social-icon" />
              </a>
              <a href="#" target="_blank" className="side-social-btn">
                <FaFacebookF className="side-social-icon" />
              </a>
              <a href="#" target="_blank" className="side-social-btn">
                <FaLinkedinIn className="side-social-icon" />
              </a>
            </div>
          </Col>
          <Col xxl={3} xl={3} lg={3} md={2} sm={1} xs={1}></Col>
        </Row>
        <Row className="side-designer-sign">
          <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
          <Col xxl={10} xl={10} lg={10} md={10} sm={10} xs={10}>
            <p className="side-designer-paragraph">
              <BiCopyright className="side-social-icon" />
              2022 I-Nameless. Designed By{" "}
              <a
                href="_targethttps://egety.com/"
                target="_blank"
                className="egety-signiture"
              >
                EGETY
              </a>
            </p>
          </Col>
          <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;

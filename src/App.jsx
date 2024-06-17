import { useState,useEffect } from 'react'
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LiveClockUpdate from './components/clock/clock';
import Footer from './components/Footer';
import './App.css'
import './assets/bootstrap.min.css'

import Home from './components/home/Home';
import Pemasukan from './components/Pemasukan/Pemasukan';
import Pengeluaran from './components/Pengeluaran/Pengeluaran';
import Tabungan from './components/Tabungan/Tabungan';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <>
    <BrowserRouter>
      <Navbar class="bg-primary" collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><b>Jaga Uang</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item><Link to="/pemasukan">Pemasukan</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/pengeluaran">Pengeluaran</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/tabungan">Tabungan</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <LiveClockUpdate></LiveClockUpdate>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <h4>Anda telah mengunjungi web ini selama {count} detik</h4>
      <br />
      <Container>
        <Row>
          <Col md={4}>
            <div class="p-3 mb-2 bg-primary-subtle text-primary-emphasis">
              <h6>Sisa</h6>
              <h6>1.000.000</h6>
            </div>
          </Col>
          <Col md={4}>
            <div class="p-3 mb-2 bg-primary-subtle text-primary-emphasis">
              <h6>Pemasukan</h6>
              <h6>2.000.000</h6>
            </div>
          </Col>
          <Col md={4}>
            <div class="p-3 mb-2 bg-primary-subtle text-primary-emphasis">
              <h6>Pengeluaran</h6>
              <h6>1.000.000</h6>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pemasukan" element={<Pemasukan/>}></Route>
        <Route path="/pengeluaran" element={<Pengeluaran/>}></Route>
        <Route path="/tabungan" element={<Tabungan/>}></Route>
      </Routes>
    </BrowserRouter>
    <br />
    <Footer></Footer>
    </>
  )
}

export default App

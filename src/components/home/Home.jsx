import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../assets/custom.css'
import ControlledCarousel from './ControlledCarousel.jsx';

function Home() {
    return(
        <>
            <Row>
                <Col md={5}>
                <div id='kesimpulan1' >
                    <h2><em>Jaga Uang</em></h2>
                    <p id='kesimpulan'>&nbsp;&nbsp;&nbsp; Adalah aplikasi yang membantu pengguna untuk mengatur pencatatan pengeluaran, pemasukan, hingga tabungan. 
                        Dengan mencatat pengeluaran dan pemasukan, pengguna dapat meminimalisir pengeluaran berlebih yang tidak perlu dengan menyesuaikan pemasukan.
                        Dengan ditur tabungan, pengguna dapat memisahkan uang tabungan dengan keperluan sehari-hari sehingga tabungan tetap terjaga</p>
                </div>
                </Col>
                <Col md={7}>
                    <ControlledCarousel></ControlledCarousel>
                </Col>
            </Row>
        </>
    )
}

export default Home
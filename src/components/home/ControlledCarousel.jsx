import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Uang1 from '../../assets/images/uang1.jpeg'
import Image from 'react-bootstrap/Image';
import Pengeluaran from '../../assets/images/pengeluaran.jpg'
import Tabungan from '../../assets/images/tabungan.jpg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image src={Uang1} rounded width={700} height={400}/>
        <Carousel.Caption>
          <h3>Pemasukan</h3>
          <p>Jumlah uang yang diterima dari kegiatan aktivitasnya seperti penjualan produk dan/atau jasa.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Pengeluaran} rounded width={700} height={400}/>
        <Carousel.Caption>
          <h3>Pengeluaran</h3>
          <p>Biaya yang dikeluarkan dalam menjalankan memenehui kebutuhan dan keinginan.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Tabungan} rounded width={700} height={400}/>
        <Carousel.Caption>
          <h3>Tabungan</h3>
          <p>
          Menyisihkan sebagian pendapatan hari ini untuk mengantisipasi kebutuhan di masa depan, baik yang tak terduga maupun yang terduga.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default ControlledCarousel;
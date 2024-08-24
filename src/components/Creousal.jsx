import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '/assets/Background/islamic.jpg';
import './Creousal.css'

export function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
      <img
      
          className="d-block w-100"
          src="/assets/Background/islamic-white.jpg"  // Use the relative path from public
          alt="First slide"
        />
        <Carousel.Caption className='font-arabic'>
        <h3>تمكين الأجيال المستقبلية بالإيمان</h3>
        <p>تقديم التعليم الجيد والدعم الشامل، مسترشدين بالقيم الإسلامية من أجل غدٍ أفضل.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="/assets/Background/islamic-white.jpg"  // Use the relative path from public
          alt="First slide"
        />
        <Carousel.Caption  className='font-urdu'>

        <h3>ایمان کے ساتھ مستقبل کی نسلوں کو مضبوط کرنا</h3>
  <br/>      
<p>اسلامی اقدار کے تحت معیاری تعلیم اور مکمل مدد فراہم کرنا، ایک روشن کل کے لیے۔</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="/assets/Background/education.jpg"  // Use the relative path from public
          alt="First slide"
        />
        <Carousel.Caption  className='font-english'>
        <h3>Empowering Future Generations with Faith</h3>
        <p>Providing quality education and holistic support, guided by Islamic values for a brighter tomorrow.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


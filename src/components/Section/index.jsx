import { useRef } from 'react';
import { Container, Carousel } from './styles';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export function Section({ title, children }) {
  const carousel = useRef(null);

  function handlegoNext(e) {
    e.preventDefault();

    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  function handlegoPrevious(e) {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }
  return (
    <Container>
      <h2>{title}</h2>
      <Carousel>
      <button 
          className='btn-left'
          onClick={handlegoNext}
        >
          <FiChevronLeft size={50}/>
        </button>
        <div ref={carousel}>
          {children}
        </div>
        <button 
          className='btn-right'
          onClick={handlegoPrevious}
        >
          <FiChevronRight size={50}/>
        </button>
      </Carousel>
    </Container>
  )
};
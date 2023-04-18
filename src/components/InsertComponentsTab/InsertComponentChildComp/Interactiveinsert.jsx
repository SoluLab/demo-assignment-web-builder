import React, { useRef } from "react";
import "./carousel.css";

const Carousel = () => {
    const slides = [
      'https://fastly.picsum.photos/id/523/200/200.jpg?hmac=d1qFeOBBhPqpCZ0U-197Ibo1qK82CmzUfDfKVS70O24',
      'https://fastly.picsum.photos/id/260/200/200.jpg?hmac=Nu9V4Ixqq3HiFhfkcsL5mNRZAZyEHG2jotmiiMRdxGA',
      'https://fastly.picsum.photos/id/937/200/200.jpg?hmac=8ePB28CQ2kANO2nsqXZ4GA-tQ6YTCG1MgZBnDsimIdQ',
      'https://fastly.picsum.photos/id/488/200/200.jpg?hmac=V8mvdG1ON09kNw80-qS00BSFq5gGhqRYoYPJftrsYA8', 
      'https://fastly.picsum.photos/id/143/200/200.jpg?hmac=zGj8dhmmqaaQZDcHhU9C0itdL12zcGTpuVdQiVrYiEQ']
    const carouselRef = useRef(null)
    
  return (
    <div className="container">
    <button className="arrows" onClick={() => carouselRef.current.scrollLeft -= 200}>{`<`}</button>
    <div className="carousel" ref={carouselRef}>
    {slides.map(slide => <div className="carousel--item"><img src={slide} alt="alt" /></div>)}
    </div>
    <button className="arrows" onClick={() => carouselRef.current.scrollLeft += 200}>{`>`}</button>
    </div>

  );
};

export default Carousel;

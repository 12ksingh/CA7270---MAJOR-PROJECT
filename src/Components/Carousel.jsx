import { useEffect, useState } from 'react';

const images = [
  'https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/electronic-payment_v1.png',
  'https://www.medianama.com/wp-content/uploads/2022/07/fintech-payment-aggregators.jpeg',
  'https://www.shutterstock.com/image-vector/sophisticated-bank-app-interface-design-260nw-2459381855.jpg',
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[550px] overflow-hidden rounded-lg shadow-xl">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from 'react';

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [inView, setInView] = useState(false);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const scrollHandler = () => {
    setInView(isInView());
  };

  useEffect(() => {
    setIsLoading(false);
    setInView(isInView());

    // Include scrollHandler as a dependency in the effect
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]); // <-- Include scrollHandler as a dependency
  try {
    return (
      <img
        src={
          isLoading
            ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
            : inView
            ? secondaryImg
            : primaryImg}
        alt=''
        ref={imageRef}
        width='200'
        height='200'
      />
    );
  } catch (error) {
    console.error('Error loading image:', error);
    return null; // Return null or an error message
  }
  
};

export default ImageToggleOnScroll;


export const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  export const jobVariant = (i) => {
    return {
      hidden: {
        x: -50,
        scale: 0,
     },
     show: {
       x: 0,
       scale: 1,
       transition: {
        type: 'spring',
        stiffness: 100,
        delay: i < 8 ? i * 0.1 : i * 0.01,
        damping: 30,
        restDelta: 0.001
       },
       
     }
    }
  }

  export const jobDetailsVariant = (i) => {
    return {
      hidden: {
        opacity: 0,
        x: i === 'left' ? -200 : i === 'right' ? 200 : 0,
        y: i === 'bottom' ? -100 : 0,
        transition: {
          type: 'spring',
          bounce: 0,
        },
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 1000,
          damping: 300
        },
      },
    }
  }
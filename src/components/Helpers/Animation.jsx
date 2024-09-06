import React from 'react';
import { motion } from "framer-motion";
import useInView from "../Helpers/UseInView";

function AnimationReveal({ disabled, children }) {
  if (disabled) {
    return <>{children}</>;
  }

  const directions = ["left", "right"];
  
  const childrenWithAnimation = React.Children.toArray(children).map((child, i) => (
    <AnimatedSlideInComponent
      key={i}
      direction={directions[i % directions.length]}
    >
      {child}
    </AnimatedSlideInComponent>
  ));

  return <>{childrenWithAnimation}</>;
}

function AnimatedSlideInComponent({ direction = "left", offset = 30, children }) {
  const [ref, inView] = useInView({ margin: `-${offset}px 0px 0px 0px` });

  const initialX = direction === "left" ? "-150%" : "150%";

  return (
    <div ref={ref}>
      <motion.section
        initial={{ x: initialX }}
        animate={{ 
          x: inView ? "0%" : initialX,
          transitionEnd: { x: inView ? 0 : initialX }
        }}
        transition={{ type: "spring", damping: 19 }}
      >
        {children}
      </motion.section>
    </div>
  );
}

const MyComponent = (props) => (
  <div className="space-y-4 overflow-hidden">
    <AnimationReveal {...props} />
  </div>
);

export default MyComponent;

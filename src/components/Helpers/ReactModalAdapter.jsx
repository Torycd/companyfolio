// import React from 'react';
import Modal from "react-modal"


const ReactModalAdapter = ({ className, ...props }) => {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  return (
    <Modal
      className={contentClassName}
      overlayClassName={overlayClassName}
      {...props}
    />
  )
}
export default ReactModalAdapter
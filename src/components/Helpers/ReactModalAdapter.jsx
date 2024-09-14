import Modal from "react-modal";

const ReactModalAdapter = ({ className, overlayClassName, ...props }) => {
  return (
    <Modal
      className={className}
      overlayClassName={overlayClassName}
      {...props}
    />
  );
};

export default ReactModalAdapter;

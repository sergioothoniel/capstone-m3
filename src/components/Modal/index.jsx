import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from '@chakra-ui/react';

const BasicModal = ({ children, isOpen, onOpen, onClose, h, w }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalCloseButton />
        <ModalContent
          bg="secondary.100"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          h={h}
          maxWidth="700px"
          w={w}
        >
          {children}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BasicModal;

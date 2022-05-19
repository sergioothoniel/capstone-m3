import { Flex, Text } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

const BasicModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          h={['310px', '448px']}
          w={['310px', '448px']}
          bg="secondary.100"
          borderRadius="1000px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BasicModal

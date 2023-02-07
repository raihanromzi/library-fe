import {
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  useDisclosure
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export default function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button onClick={onOpen}>Add Filter</Button>
        <IconButton onClick={onOpen} icon={<AddIcon />} />
      </ButtonGroup>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filter by</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RadioGroup defaultValue="">
              <HStack spacing="24px">
                <Radio value="Category">Category</Radio>
                <Radio value="Title">Title</Radio>
              </HStack>
            </RadioGroup>
          </ModalBody>
          <ModalHeader>Sort by</ModalHeader>
          <ModalBody>
            <RadioGroup defaultValue="">
              <HStack spacing="24px">
                <Radio value="Ascending">Ascending</Radio>
                <Radio value="Descending">Descending</Radio>
              </HStack>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" variant="solid" onClick={onClose}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

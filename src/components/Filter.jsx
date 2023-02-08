import {
  Box,
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
  Tag,
  useDisclosure
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filterValue, setFilterValue] = useState('');
  const [sortValue, setSortValue] = useState('');

  return (
    <>
      <Box mt={3}>
        <HStack>
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
                <RadioGroup onChange={setFilterValue} defaultValue={filterValue}>
                  <HStack spacing="24px">
                    <Radio value="">No Sort</Radio>
                    <Radio value="Category">Category</Radio>
                    <Radio value="Title">Title</Radio>
                  </HStack>
                </RadioGroup>
              </ModalBody>
              <ModalHeader>Sort by</ModalHeader>
              <ModalBody>
                <RadioGroup onChange={setSortValue} defaultValue={sortValue}>
                  <HStack spacing="24px">
                    <Radio value="">No Filter</Radio>
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
          {filterValue ? <Tag>{filterValue}</Tag> : ''}
          {sortValue ? <Tag>{sortValue}</Tag> : ''}
        </HStack>
      </Box>
    </>
  );
}

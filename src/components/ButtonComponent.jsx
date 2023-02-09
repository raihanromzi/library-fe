import { Button } from '@chakra-ui/react';

export default function ButtonComponent({ children }) {
  return (
    <Button
      minW={'310px'}
      p={6}
      bg={'black'}
      color={'white'}
      rounded={'none'}
      _hover={{
        bg: 'blackAlpha.900'
      }}>
      {children}
    </Button>
  );
}

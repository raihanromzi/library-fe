import { CloseButton, Flex, Image, Tag, Text, VStack } from '@chakra-ui/react';

export default function LoanBookCheckout() {
  return (
    <Flex alignItems={'center'}>
      <Image
        width={'120px'}
        height={'120px'}
        objectFit={'cover'}
        borderRadius={8}
        src={'https://bit.ly/dan-abramov'}
        mr={4}
      />
      <Flex flexDirection={'column'} gap={2}>
        <Text fontSize={'xl'} fontWeight={'bold'}>
          Atomic Book
        </Text>
        <Text fontSize={'md'} fontWeight={'light'}>
          James
        </Text>
        <Flex flexDirection={'row'} gap={3}>
          <VStack alignItems={'flex-start'}>
            <Tag>Fiction</Tag>
          </VStack>
          <VStack alignItems={'flex-start'}>
            <Tag>Fiction</Tag>
          </VStack>
        </Flex>
      </Flex>
      <CloseButton ml={20} />
    </Flex>
  );
}

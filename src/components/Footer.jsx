import { Center, Flex, Heading, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Flex flexDirection={'column'} border={'1px'} borderColor={'gray.200'} borderRadius={5}>
      <Flex
        color={'white'}
        bg={'black'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        pt={10}
        pb={100}
        px={10}>
        <Heading as={'h3'} size={'md'} mb={4}>
          Library Mini Project Purwadhika
        </Heading>
        <Flex flexDirection={'column'}>
          <Text textAlign={'left'}>Raihan Romzi R (Front-End)</Text>
          <Text textAlign={'left'}>Sandy (Back-End)</Text>
          <Text textAlign={'left'}>Dan Lalu (Back-End)</Text>
        </Flex>
      </Flex>
      <Center p={3}>
        <Text>Made with 🧡</Text>
      </Center>
    </Flex>
  );
}

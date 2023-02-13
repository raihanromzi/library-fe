import { Box, Flex, Image, LinkBox, LinkOverlay, Tag, Text, VStack } from '@chakra-ui/react';
import ButtonComponent from './ButtonComponent.jsx';

export default function Book() {
  return (
    <Box
      maxH={'1000px'}
      maxW={'1000px'}
      p={4}
      border={'2px'}
      borderColor="black"
      boxShadow={'10px 10px 0 black'}>
      <Flex flexDirection={'row'} alignItems={'flex-start'} justifyContent={'space-around'}>
        <Box p={2}>
          <Image
            boxSize={'450px'}
            objectFit={'cover'}
            src={'https://bit.ly/dan-abramov'}
            alt={'test'}
          />
        </Box>
        <Flex flexDirection={'column'} flexWrap={'wrap'} maxW={'500px'} gap={6} mx={10}>
          <Flex flexDirection={'column'} alignItems={'flex-start'}>
            <Text fontSize={'3xl'} fontWeight={'bold'}>
              Atomic Habits
            </Text>
            <Text color={'green.600'} fontSize={'md'} mb={3}>
              James
            </Text>
            <Flex flexDirection={'row'} gap={2}>
              <VStack alignItems={'flex-start'}>
                <Tag mt={2} mb={2}>
                  Fiction
                </Tag>
              </VStack>
              <VStack alignItems={'flex-start'}>
                <Tag mt={2} mb={2}>
                  Fiction
                </Tag>
              </VStack>
            </Flex>
          </Flex>
          <Flex>
            <Text fontSize={'sm'} textAlign={'justify'}>
              What I Learned from the Trees delves into the intricate relationship between humans
              and nature, and how these often overlooked, everyday interactions affect us as
              individuals, families, and communities. With a backbone rooted in primordial imagery
              and allegory, and a focus on how the growing disconnect with our own wants, needs, and
              fears creates deeper divides in our relationships, this collection is notably relevant
              to today society and the struggles we face with the ever-expanding detachment between
              humans and the natural world. Are not all living creatures seeking a notable
              existence? A deep sense of belonging? Of relevance? Of purpose? Of love? How often do
              we yearn for these wants, yet fight the vulnerability it takes to reach them? Why do
              we so clearly seek each other, yet refuse to reach out our hands?
            </Text>
          </Flex>
          <Flex
            mt={10}
            flexDirection={'row'}
            gap={'50px'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            alignContent={'center'}>
            <ButtonComponent>Add to Cart</ButtonComponent>
            <LinkBox as={'section'}>
              Back to
              <LinkOverlay href={'../home'}>
                <b> Home</b>
              </LinkOverlay>
            </LinkBox>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

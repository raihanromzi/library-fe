import { Box, Flex, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import ButtonComponent from './ButtonComponent.jsx';

export default function Book() {
  return (
    <Flex flexDirection={'row'} maxW={'1070px'}>
      <Box p={4}>
        <Image src={'https://bit.ly/dan-abramov'} alt={'test'} />
      </Box>
      <Flex flexDirection={'column'} flexWrap={'wrap'} maxW={'644px'}>
        <Flex flexDirection={'column'} alignItems={'flex-start'}>
          <Text>Atomic Habits</Text>
          <Text>James</Text>
        </Flex>
        <Text textAlign={'left'}>
          What I Learned from the Trees delves into the intricate relationship between humans and
          nature, and how these often overlooked, everyday interactions affect us as individuals,
          families, and communities. With a backbone rooted in primordial imagery and allegory, and
          a focus on how the growing disconnect with our own wants, needs, and fears creates deeper
          divides in our relationships, this collection is notably relevant to today's society and
          the struggles we face with the ever-expanding detachment between humans and the natural
          world. Are not all living creatures seeking a notable existence? A deep sense of
          belonging? Of relevance? Of purpose? Of love? How often do we yearn for these wants, yet
          fight the vulnerability it takes to reach them? Why do we so clearly seek each other, yet
          refuse to reach out our hands?
        </Text>
        <Flex
          flexDirection={'row'}
          alignItems={'center'}
          gap={'24px'}
          justifyContent={'center'}
          mt={'120px'}>
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
  );
}

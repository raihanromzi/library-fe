import { Card, CardBody, Image, LinkBox, LinkOverlay, Tag, Text, VStack } from '@chakra-ui/react';

export default function BookCard({ navigateTo, title, author }) {
  return (
    <LinkBox as={'button'}>
      <LinkOverlay href={navigateTo}>
        <Card w={'320px'} variant={'outline'}>
          <CardBody p={4}>
            <Image src={'https://bit.ly/dan-abramov'} alt={'test'} />
            <VStack alignItems={'flex-start'}>
              <Tag mt={4} mb={4}>
                Fiction
              </Tag>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text as={'b'} textTransform={'capitalize'}>
                {title}
              </Text>
              <Text pb={3}>{author}</Text>
            </VStack>
          </CardBody>
        </Card>
      </LinkOverlay>
    </LinkBox>
  );
}

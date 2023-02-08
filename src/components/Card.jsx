import { Card, CardBody, Image, LinkBox, LinkOverlay, Tag, Text, VStack } from '@chakra-ui/react';

export default function CardBook({ image, title, author }) {
  return (
    <LinkBox as={'article'}>
      <LinkOverlay href={'www.google.com'}>
        <Card w={'320px'} h={'420px'} variant={'outline'}>
          <CardBody>
            <Image src={'https://bit.ly/dan-abramov'} alt={'test'} />
            <VStack alignItems={'flex-start'} mt={3} mb={3}>
              <Tag>Fiction</Tag>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text as={'b'} textTransform={'capitalize'}>
                {title}
              </Text>
              <Text>{author}</Text>
            </VStack>
          </CardBody>
        </Card>
      </LinkOverlay>
    </LinkBox>
  );
}

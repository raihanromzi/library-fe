import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';

export default function RegisterCard() {
  return (
    <Flex align={'center'} justify={'center'} alignItems={'center'} mt={'20vh'}>
      <Box border={'2px'} borderColor={'gray.200'} p={'40px'} boxShadow={'lg'}>
        <Stack minW={'md'}>
          <Stack align={'flex-start'} mb={4}>
            <Heading fontSize={'4xl'} textTransform={'capitalize'}>
              Register
            </Heading>
          </Stack>
          <Box rounded={'none'} p={0}>
            <Stack spacing={7}>
              <FormControl id="nim">
                <FormLabel>NIM</FormLabel>
                <Input rounded={'none'} type="number" />
              </FormControl>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input rounded={'none'} type="text" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input rounded={'none'} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Email</FormLabel>
                <Input rounded={'none'} type="password" />
              </FormControl>
              <Button
                p={6}
                bg={'black'}
                color={'white'}
                rounded={'none'}
                _hover={{
                  bg: 'blackAlpha.900'
                }}>
                Register
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}

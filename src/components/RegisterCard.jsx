import { Box, Flex, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import ButtonComponent from './ButtonComponent.jsx';

export default function RegisterCard() {
  return (
    <Flex align={'center'} justify={'center'} alignItems={'center'} mt={'15vh'}>
      <Box border={'2px'} p={'40px'} borderColor="black" boxShadow={'10px 10px 0 black'}>
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
                <Input border={'1px'} borderColor="black" rounded={'none'} type="number" />
              </FormControl>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input border={'1px'} borderColor="black" rounded={'none'} type="text" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input border={'1px'} borderColor="black" rounded={'none'} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Email</FormLabel>
                <Input border={'1px'} borderColor="black" rounded={'none'} type="password" />
              </FormControl>
              <ButtonComponent>Register</ButtonComponent>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}

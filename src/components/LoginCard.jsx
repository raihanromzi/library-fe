import { Box, Flex, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import ButtonComponent from './ButtonComponent.jsx';

export default function LoginCard({ loginHeader }) {
  return (
    <Flex align={'center'} justify={'center'} alignItems={'center'} mt={'20vh'}>
      <Box p={'40px'} border={'2px'} borderColor="black" boxShadow={'10px 10px 0 black'}>
        <Stack minW={'md'}>
          <Stack align={'flex-start'} mb={4}>
            <Heading fontSize={'4xl'} textTransform={'capitalize'}>
              {loginHeader}
            </Heading>
          </Stack>
          <Box rounded={'none'} p={0}>
            <Stack spacing={7}>
              <FormControl id="email">
                <FormLabel>Email address / Username</FormLabel>
                <Input border={'1px'} borderColor="black" rounded={'none'} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input border={'1px'} borderColor="black" rounded={'none'} type="password" />
              </FormControl>
              <ButtonComponent>Login</ButtonComponent>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}

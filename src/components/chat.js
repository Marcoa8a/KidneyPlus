import {
  Box,
  Button,
  Input,
  Icon,
  Stack,
  VStack,
  Avatar,
  Center,
  FormControl,
  WarningOutlineIcon,
  StatusBar,
  HStack,
  IconButton,
  Text,
} from "native-base";

export const Message = ({ message, avatar, time, self }) => {
  // const timeTag = new Date(time).

  const Image = () => (
    <Box p={1}>
      <Avatar
        bg="cyan.500"
        alignSelf="center"
        size="md"
        source={{
          uri: avatar,
        }}
      />
    </Box>
  );

  const MsgBox = () => (
    <VStack
      mx={3}
      py={1}
      space={1}
      flex={1}
      alignSelf={"stretch"}
      alignItems={self ? "flex-end" : "flex-start"}
      //   w="full"
      //   maxW="70%"
    >
      <Box
        borderColor="violet.600"
        borderWidth={1.5}
        rounded="lg"
        py={1}
        px={2}
        bg={self ? "violet.600" : "violet.50"}
        // maxW="70%"
      >
        <Text color={self ? "violet.50" : "violet.800"} overflow={"visible"}>
          {message}
        </Text>
      </Box>
      <Text color="gray.600">{time}</Text>
    </VStack>
  );

  return (
    <HStack flex={1} space={3} direction={self ? "row-reverse" : "row"}>
      <Image />
      <MsgBox />
    </HStack>
  );
};

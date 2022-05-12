// import { useState } from 'react';
// import {
//   Input,
//   InputGroup,
//   InputRightElement,
//   Button,
//   Flex,
//   Text,
//   Icon,
// } from '@chakra-ui/react';
// import { BsEyeSlash, BsEye } from 'react-icons/bs';

// const PasswordInput = ({
//   text,
//   placeholder,
//   border,
//   backgroundColor,
//   size,
//   width,
// }) => {
//   const [show, setShow] = useState(false);
//   const handleClick = () => setShow(!show);
//   return (
//     <Flex flexDirection="column">
//       <Text align="left" color="secundary.100">
//         {text}
//       </Text>
//       <InputGroup size="md">
//         <Input
//           placeholder={placeholder}
//           type={show ? 'text' : 'password'}
//           color="gray.100"
//           border={border}
//           backgroundColor={backgroundColor}
//           size={size}
//           width={width}
//         />
//         <InputRightElement width="9">
//           <Button
//             onClick={handleClick}
//             backgroundColor="transparent"
//             variant="unstyled"
//             d="flex"
//             _focus={{}}
//           >
//             {show ? <Icon as={BsEye} /> : <Icon as={BsEyeSlash} />}
//           </Button>
//         </InputRightElement>
//       </InputGroup>
//     </Flex>
//   );
// };

// export default PasswordInput;

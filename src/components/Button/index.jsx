import { Button as ButtonChakra } from '@chakra-ui/react';

const Button = ({
  bg,
  height,
  width,
  border,
  fontSize,
  borderColor,
  backgroundColor,
  color,
  hoverBg,
  maxWidth,
  minWidth,
  hoverColor,
  hoverBorder,
  fontWeigth,
  children,  
  onClick = false,
  type
}) => {
  return (
    <ButtonChakra
    type={type}
      bg={`${bg}`}
      height={`${height}`}
      width={`${width}`}
      maxWidth={`${maxWidth}`}
      minWidth={`${minWidth}`}
      border={`${border}`}
      borderRadius="8px"
      fontSize={`${fontSize}`}
      borderColor={`${borderColor}`}
      backgroundColor={`${backgroundColor}`}
      color={`${color}`}
      variant="unstyled"
      d="flex"
      _focus={{}}
      _hover={{
        bg: `${hoverBg}`,
        color: `${hoverColor}`,
        borderColor: `${hoverBorder}`,
      }}
      fontWeight={`${fontWeigth}`}     
      onClick={() => onClick()}

    >
      {children}
    </ButtonChakra>
  );
};

export default Button;

import { Button as ButtonChakra } from '@chakra-ui/react';

const Button = ({
  bg,
  height,
  width,
  border,
  fontSize,
  borderColor,
  color,
  hoverBg,
  hoverColor,
  hoverBorder,
  fontWeigth,
  children,
  minWidth,
  maxWidth
}) => {
  return (
    <ButtonChakra
      bg={`${bg}`}
      height={`${height}`}
      width={`${width}`}
      border={`${border}`}
      borderRadius="8px"
      fontSize={`${fontSize}`}
      borderColor={`${borderColor}`}
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
      minWidth={minWidth}
      maxWidth={maxWidth}
    >
      {children}
    </ButtonChakra>
  );
};

export default Button;

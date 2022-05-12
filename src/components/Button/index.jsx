import { Button } from '@chakra-ui/react';

function ButtonChakra({
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
}) {
  return (
    <Button
      bg={`${bg}`}
      height={`${height}`}
      width={`${width}`}
      border={`${border}`}
      borderRadius="8px"
      fontSize={`${fontSize}`}
      borderColor={`${borderColor}`}
      color={`${color}`}
      _hover={{
        bg: `${hoverBg}`,
        color: `${hoverColor}`,
        borderColor: `${hoverBorder}`,
      }}
      fontWeight={`${fontWeigth}`}
    >
      Button
    </Button>
  );
}

export default ButtonChakra;

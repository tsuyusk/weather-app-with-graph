import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";

import { Container, TextInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon />}
      <TextInput {...rest} />
    </Container>
  );
};

export default Input;

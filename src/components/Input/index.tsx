import React, { InputHTMLAttributes, forwardRef } from "react";
import { IconBaseProps } from "react-icons";

import { Container, TextInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.RefForwardingComponent<HTMLInputElement, InputProps> = (
  { icon: Icon, ...rest },
  ref
) => {
  return (
    <Container>
      {Icon && <Icon />}
      <TextInput {...rest} ref={ref} />
    </Container>
  );
};

export default forwardRef(Input);

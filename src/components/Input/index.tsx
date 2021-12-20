import React from 'react';
import { TextInputProps } from 'react-native';
import lupaPNG from '../../assets/lupa.png';

import {
   Container,
   WrapperInput,
   Icon
} from './styles';

interface InputProps extends TextInputProps {
  value: string;
  placeholder: string;
}

export const Input: React.ElementType<InputProps> = ({
  value,
  placeholder,
  onChangeText,
  onSubmitEditing
}: InputProps) => {
  return (
    <Container>
      <Icon source={lupaPNG} />
      <WrapperInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </Container>
  );
};
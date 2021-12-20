import styled, { css } from 'styled-components/native';
import { Pressable, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    background: ${({ theme }) => theme.colors.estrutura_border};
    width: 100%;
    height: 40px;
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
    margin-top: 16px;
    margin-bottom: 24px;
`;

export const WrapperInput = styled.TextInput`
  width: 100%;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  margin-right: 18px;
`;

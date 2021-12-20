import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
    padding-top: 16px
    padding-bottom: 16px;
`;

export const Content = styled.View`
    width: 60%;
`;

export const Image = styled.Image`
    width: 30%;
    height: 100%;
    margin-right: 4px;
`;

export const Title = styled(Text).attrs({
    numberOfLines: 2,
    lineBreakMode: 'clip'
})`
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(14)}px;
`;

export const PriceContent = styled.View`
    flex-direction: row;
    margin-top: 16px;
`;

export const Currency = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(14)}px;
    margin-right: 13px;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(18)}px;
`;

export const QuantityContent = styled.View`
    flex-direction: row;
    align-items: center;

    margin-top: 16px;
`;

export const QuantityButton = styled(TouchableOpacity).attrs({
    activeOpacity: 0.5
})`
    width: 32px;
    height: 32px;
    background: ${({ theme }) => theme.colors.background};

    border-radius: 16px;

    align-items: center;
    justify-content: center;
`;

export const Quantity = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(18)}px;

    margin-left: 18px;
    margin-right: 18px;
`;

export const Delete = styled(TouchableOpacity).attrs({
    activeOpacity: 0.6
})`
    width: 8%;
`;

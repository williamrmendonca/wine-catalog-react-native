import styled, { css } from 'styled-components/native';
import { Pressable, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   width: 47%;
   margin-bottom: 24px;
   padding: 1px;
`;
export const WrapperProduct = styled(Pressable).attrs({
    activeOpacity: 0.7
})`
    /* width: 47%; */
    height: 348px;
    margin-bottom: 8px;

    background: ${({ theme }) => theme.colors.background};
    border-radius: 4px;
    padding-top: 16px;
    ${() => css`
		elevation: 2;
		box-shadow: 1px 1px 1px rgba(0,0,0,0.2);
	`}

`;

export const Content = styled.View`
    padding: 10px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 183px;
    
`;

export const Title = styled(Text).attrs({
    numberOfLines: 3,
    lineBreakMode: 'clip'
})`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(17)}px;
    text-align: center;
    margin-bottom: 6px;
`;

export const PriceContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

`;

export const Currency = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(12)}px;
    margin-right: 5px;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(18)}px;
`;

export const ButtonAdd = styled(Pressable).attrs({
    activeOpacity: 0.7
})`
    align-items: center;
    justify-content: center;

    height: 40px;
    margin-bottom: 16px;

    background: ${({ theme }) => theme.colors.success_default};
    border-radius: 4px;
`;

export const TextButtonAdd = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(18)}px;
    text-align: center;
`;

export const ImageSelos = styled.Image`
    position: absolute;
    width: 32px;
    height: 32px;
    top: 160px;
    left: 8px;
`;

export const WrapperDiscount = styled.View`
   width: ${RFValue(65)}px;
   height: ${RFValue(16)}px;
   background: ${({ theme }) => theme.colors.tavel_default};
   align-items: center;
   justify-content: center;
   border-radius: 2px;
`;

export const TextDiscount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(16)}px;
    text-align: center;
`;

export const TextPrice = styled.Text`
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(10)}px;
    line-height: ${RFValue(12)}px;
    text-align: center;
    text-decoration: line-through;    

`;

export const TextMember = styled.Text`
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(10)}px;
    line-height: ${RFValue(12)}px;
    text-align: center;
    text-transform: uppercase;
`;

export const TextPriceMember = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.price_member};
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(28)}px;
    text-align: center;

`;

export const WrapperPrices = styled.View`
    position: absolute;
    width: 100%;
    bottom: 8px;
    align-items: center;
    justify-content: center;
`;

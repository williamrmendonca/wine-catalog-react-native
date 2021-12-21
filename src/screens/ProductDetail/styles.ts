import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    padding: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.backgroundList};
`;

export const WrapperProduct = styled.ScrollView`
    padding: 16px;
    background: ${({ theme }) => theme.colors.backgroundList};
`;

export const BackButton = styled(TouchableOpacity).attrs({
    activeOpacity: 0.6
})``;

export const ImageCart = styled.Image`
    width: 56px;
    height: 56px;
    z-index: 2;
`;

export const ImageProduct = styled.Image`
    width: 100%;
    height: 333px;
    
`;
export const ImageFlag = styled.Image`
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.background};
`;


export const Info = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 8px;
    margin-bottom: 24px;
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(18)}px;
    line-height: ${RFValue(24)}px;
    text-align: center;
    margin-top: 8px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(20)}px;
    line-height: ${RFValue(24)}px;
    text-align: left;
    margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(24)}px;
    text-align: left;
    margin-bottom: 150px;
`;

export const InfoText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(24)}px;
    text-align: left;
`;

export const Footer = styled.View`
    height: 88px;
    width: 100%;
    background: ${({ theme }) => theme.colors.background};
    padding: 16px;

    /* border-top-left-radius: 10px;
    border-top-right-radius: 10px; */
    ${() => css`
		elevation: 3;
		box-shadow: 0px -2px 2px rgba(0,0,0,0.1);
	`}

`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(16)}px;
`;


export const WrapperDiscount = styled.View`
   width: ${RFValue(65)}px;
   height: ${RFValue(16)}px;
   background: ${({ theme }) => theme.colors.secondary};
   align-items: center;
   justify-content: center;
   border-radius: 2px;
`;

export const TextDiscount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(16)}px;
    text-align: center;
`;

export const TextPrice = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(20)}px;
    /* text-align: center; */
    text-decoration: line-through;    

`;

export const TextMember = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(10)}px;
    line-height: ${RFValue(16)}px;
    text-align: center;
    text-transform: uppercase;
`;

export const TextPriceMember = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.price_member};
    font-size: ${RFValue(24)}px;
    line-height: ${RFValue(28)}px;
    text-align: center;

`;

export const WrapperPrices = styled.View`
    position: absolute;
    width: 50%;
    bottom: 8px;
    left: 16px;
    /* align-items: center;
    justify-content: center; */
`;

export const PriceContent = styled.View`
    flex-direction: row;
    /* align-items: center; */
    /* justify-content: space-evenly; */
    width: 100%;

`;

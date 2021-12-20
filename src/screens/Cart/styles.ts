import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    padding: 16px;
    /* margin-top: 30px; */
    /* margin-bottom: 20px; */

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.background};
`;

export const BackButton = styled(TouchableOpacity).attrs({
    activeOpacity: 0.6
})``;

export const Info = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(24)}px;
    margin-right: 16px;
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;
`;

export const Content = styled.View`
    height: ${Dimensions.get('window').height - 150 - 80}px;
    background: ${({ theme }) => theme.colors.backgroundList};
`;

export const Footer = styled.View`
    height: 150px;
    width: 100%;
    background: ${({ theme }) => theme.colors.background};
    padding: 16px;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(16)}px;
`;

export const PriceCotent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Currency = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(12)}px;
    margin-right: 5px;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(18)}px;
`;

export const Line = styled.View`
    width: 100%;
    height: 1px;

    background: ${({ theme }) => theme.colors.stroke};
    margin-bottom: 20px;
`;

export const CurrencyTotal = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(16)}px;
    margin-right: 5px;
`;

export const PriceTotal = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(30)}px;
`;

export const ListDivider = styled.View`
    width: 100%;
    height: 1px;

    background: ${({ theme }) => theme.colors.stroke};
    
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const WrapperEmpty = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 200px;
    margin-top: 20px;
    padding: 20px;
`;

export const ImageWineBox = styled.Image`
    width: 125px;
    height: 175px;
    margin-bottom: 40px;
`;

export const TitleEmpty = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(16)}px;
    margin-bottom: 16px;
    text-align: center;
`;

export const SubTitleEmpty = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(14)}px;
    text-align: center;

`;

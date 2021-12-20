import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MotiImage, MotiText, MotiView } from '@motify/components';

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding-bottom: 0px;
    background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    z-index: 1;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    height: 60px;

    background: ${({ theme }) => theme.colors.background};
    ${() => css`
		elevation: 3;
		box-shadow: 0px 2px 1px rgba(0,0,0,0.2);
	`}

`;

export const WrapperList = styled.View`
    flex: 1;
    padding-left: 18px;
    padding-right: 14px;
    padding-bottom: 0px;

    background: ${({ theme }) => theme.colors.backgroundList};
`;

// export const Title = styled.Text`
//     font-family: ${({ theme }) => theme.fonts.bold};
//     color: ${({ theme }) => theme.colors.primary};
//     font-size: ${RFValue(24)}px;
// `;

// export const TitleStore = styled.Text`
//     color: ${({ theme }) => theme.colors.secondary};
// `;

// export const Subtitle = styled.Text`
//     font-family: ${({ theme }) => theme.fonts.regular};
//     color: ${({ theme }) => theme.colors.text};
//     font-size: ${RFValue(18)}px;
// `;

export const Cart = styled(TouchableOpacity).attrs({
    activeOpacity: 0.6
})`
    position: absolute;
    width: 56px;
    height: 56px;
    top: -8px;
    right: 18px;
    z-index: 2;

`;

export const ImageLogo = styled.Image`
    width: 78px;
    height: 22px;
`;

export const ImageCart = styled(MotiImage)`
    width: 56px;
    height: 56px;
    z-index: 2;
`;

export const WrapperQuantity = styled(MotiView)`
    align-items: center;
    justify-content: center;
    width: ${RFValue(20)}px;
    height: ${RFValue(20)}px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.background};
    z-index: 3;
    right: -36px;
    top: 56px;
`;

export const Quantity = styled(MotiText)`
    z-index: 4;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.branding_chardonnay_default};
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(16)}px;

    text-align: right;
`;

export const FilterContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 24px;
`;

export const TextTotalItems = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(16)}px;
`;

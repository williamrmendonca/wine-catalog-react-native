import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { ProductProps } from '../../@types';
import { formatCurrency } from '../../utils/formatCurrency'
import selosPNG from '../../assets/selos.png';

import {
    Container,
    WrapperProduct,
    Content,
    Image,
    Title,
    PriceContent,
    Currency,
    Price,
    ButtonAdd,
    TextButtonAdd,
    ImageSelos,
    WrapperDiscount,
    TextDiscount,
    TextMember,
    TextPrice,
    TextPriceMember,
    WrapperPrices
} from './styles';

interface Props {
    product: ProductProps;
    onPress: (item: ProductProps) => void;
    onPressOut: () => void;
}

export function Product({
    product,
    onPress,
    onPressOut
}: Props) {
    const navigation = useNavigation();

    function handleOpenProductDetail(product:ProductProps) {
        navigation.navigate('ProductDetail', { product, onPress })
    }
    
    return (
        <Container>
            <WrapperProduct
                onPress={() => handleOpenProductDetail(product)}
                // onPress={() => onPress(product)}
                // onPressOut={onPressOut}
            >

                <Image
                    source={{ uri: product.image }}
                    resizeMode='contain'
                />
                <ImageSelos
                    source={selosPNG}
                />

                <Content>
                    <Title>{product.name}</Title>
                </Content>
                <WrapperPrices>
                        <PriceContent>
                            <TextPrice>{formatCurrency(product.price)}</TextPrice>
                            <WrapperDiscount>
                                <TextDiscount>{product.discount}% OFF</TextDiscount>
                            </WrapperDiscount>
                        </PriceContent>
                        <PriceContent>
                            <TextMember>Sócio{`\n`}wine</TextMember>
                            <TextPriceMember>{formatCurrency(product.priceMember)}</TextPriceMember>
                        </PriceContent>
                        <PriceContent>
                            <TextMember>Não sócio  </TextMember>
                            <TextMember>{formatCurrency(product.priceNonMember)}</TextMember>
                        </PriceContent>
                    </WrapperPrices>

            </WrapperProduct>
            <ButtonAdd
                onPress={() => onPress(product)}
                onPressOut={onPressOut}
            >
                <TextButtonAdd>
                    Adicionar
                </TextButtonAdd>
            </ButtonAdd>
        </Container>
    );
}
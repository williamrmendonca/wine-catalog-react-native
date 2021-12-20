import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { FlatList, View } from 'react-native';

import { useCart } from '../../hooks/cart';
import { ProductCart } from '../../components/ProductCart';
import { formatCurrency } from '../../utils/formatCurrency'
import wineboxPNG from '../../assets/wine-box.png';

import {
    Container,
    Header,
    BackButton,
    Info,
    Title,
    Subtitle,
    Content,
    Footer,
    Wrapper,
    Description,
    PriceCotent,
    Currency,
    Price,
    Line,
    CurrencyTotal,
    PriceTotal,
    ListDivider,
    WrapperEmpty,
    ImageWineBox,
    TitleEmpty,
    SubTitleEmpty
} from './styles';

export function Cart({ navigation }) {
    const theme = useTheme();
    const { cart, removeToCart, updateToCart } = useCart();

    function handleRemoveProduct(id: number){
        removeToCart(id);
    }

    function handleUpdateCart(id: number, quantity: number){
        quantity == 0 ? removeToCart(id) : updateToCart(id, quantity);
    }

    const quantityCart =
        cart.reduce((sumTotal, product) => {
            sumTotal += product.quantity;
            return sumTotal
        }, 0);

    const subTotal =
        cart.reduce((sumTotal, product) => {
            sumTotal += product.quantity * product.price;
            return sumTotal
        }, 0);

    return (
        <Container>
            <Header>
                <BackButton
                    onPress={() => navigation.goBack()}
                >
                    <Feather
                        name="chevron-left"
                        size={30}
                        color={theme.colors.primary}
                    />
                </BackButton>

                <Info>
                    <Title>
                        Sua WineBox
                    </Title>
                    {
                        cart.length > 0 ?
                            <Subtitle>
                                {quantityCart} {quantityCart > 1 ? 'itens' : 'item'}
                            </Subtitle>
                        : null
                    }
                </Info>

                <View style={{ width: 30 }} />
            </Header>
            {
                cart.length > 0 ?
                <>
                    <Content>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={cart}
                            keyExtractor={item => item.id.toString()}
                            contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 0 }}
                            ItemSeparatorComponent={() => <ListDivider />}
                            renderItem={({ item }) =>
                                <ProductCart 
                                    product={item} 
                                    removeProduct={handleRemoveProduct}
                                    updateProduct={handleUpdateCart}
                                />
                            }
                        />
                    </Content>

                    <Footer>
                        <Wrapper>
                            <Description>Total: </Description>
                            <PriceCotent>
                                {/* <PriceTotal>{(subTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PriceTotal> */}
                                <PriceTotal>{formatCurrency(subTotal)}</PriceTotal>
                            </PriceCotent>
                        </Wrapper>
                    </Footer>
                </>
                : 
                <WrapperEmpty>
                    <ImageWineBox
                        source={wineboxPNG}
                    />

                    <TitleEmpty>
                        Sua WineBox está vazia.
                    </TitleEmpty>
                    <SubTitleEmpty>
                        Você ainda não adcionou itens à WineBox.{`\n`}
                        Encontre na Wine produtos que combinem com você.
                    </SubTitleEmpty>                    
                </WrapperEmpty>
            }
        </Container>
    );
}
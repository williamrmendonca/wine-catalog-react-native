import React, { useState, useEffect } from 'react';
import { Alert, FlatList, ScrollView } from 'react-native';
import { useAnimationState } from 'moti';

import api from '../../services/api';
import { useCart } from '../../hooks/cart';
import { Product } from '../../components/Product';
import { ProductProps } from '../../@types';
import { Loading } from '../../components/Loading'
import { Input } from '../../components/Input'
import logoPNG from '../../assets/wine_logo.png';
import cartPNG from '../../assets/cart.png';

import {
    Container,
    Header,
    WrapperList,
    Cart,
    ImageCart,
    ImageLogo,
    WrapperQuantity,
    Quantity,
    FilterContent,
    TextTotalItems
} from './styles';

export function Home({ navigation }) {
    const { cart, addToCart } = useCart();

    const [data, setData] = useState<ProductProps[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0)
    const [search, setSearch] = useState('')

    function handleCart() {
        navigation.navigate('Cart');
    }

    const quantityCart =
        cart.reduce((sumTotal, product) => {
            sumTotal += product.quantity;
            return sumTotal
        }, 0)

    const toogleAnimationState = useAnimationState({
        inImage: {
            width: 66,
            height: 66,
        },
        outImage: {
            width: 56,
            height: 56,
        },
    });


    function handlePressIn(product: ProductProps) {
        toogleAnimationState.transitionTo('inImage');
        addToCart(product);
    }

    function handlePressOut() {
        toogleAnimationState.transitionTo('outImage');
    }

    async function loadData() {
        if (loading) {
            return;
        }
        setLoading(true)
        try {
            // const response = await api.get(`products?page=${page}&limit=10&filter=190-290&name=garrida`);
            const response = await api.get(`products?page=${page}&name=${search.trim()}`);
            const {totalItems} = response.data;
            setTotalItems(totalItems)
            // setData(prevState => prevState.concat(...response.data.items));
            setData(response.data.items);
            // setPage(page + 1)
        } catch {
            Alert.alert("Oops!", "Unable to load products from the store. Try again later.")
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, [data])

    function handleSearch() {
        setSearch(search.trim())
        const emptyData = []
        setData(emptyData);
        // loadData();
    }

    useEffect(() => {

        const emptyData = []
        setData(emptyData);

    }, [search])

    return (
        <Container>
            <Header>
                <ImageLogo source={logoPNG} />
                <Cart onPress={handleCart} >
                    <WrapperQuantity>
                        <Quantity>
                            {quantityCart}
                        </Quantity>
                    </WrapperQuantity>
                    <ImageCart
                        source={cartPNG}
                        state={toogleAnimationState}
                    />
                </Cart>
            </Header>
            <WrapperList>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                        <Product
                            product={item}
                            onPress={handlePressIn}
                            onPressOut={handlePressOut}
                        />
                    }
                    horizontal={false}
                    numColumns={2}
                    contentContainerStyle={{ paddingVertical: 16 }}
                    columnWrapperStyle={{
                        flex: 1,
                        justifyContent: 'space-between',
                    }}
                    onEndReached={loadData}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={
                        <Loading loading={loading} />
                    }
                    ListHeaderComponent={
                        <>
                            <Input 
                                value={search}
                                placeholder='O que você está procurando?'
                                onChangeText={text => setSearch(text)}
                                onSubmitEditing={() => handleSearch()}
                            />
                            <FilterContent>
                                <TextTotalItems>
                                    {totalItems} produtos encontrados 
                                </TextTotalItems>
                            </FilterContent>
                        </>

                    }
                />
            </WrapperList>
        </Container>
    );
}
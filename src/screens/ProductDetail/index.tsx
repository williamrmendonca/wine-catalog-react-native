import React from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import { ProductProps } from '../../@types';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import cartPNG from '../../assets/cart.png';

import {
   Container,
   Header,
   BackButton,
   ImageCart,
   WrapperProduct,
   ImageProduct,
   Info,
   Name,
   Title,
   Subtitle,
   ImageFlag,
   InfoText,
   Footer,
} from './styles';


export function ProductDetail(){
   const theme = useTheme();
   const route = useRoute();
   const { product } = route.params as ProductProps
   const navigation = useNavigation();

   return(
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
                <ImageCart
                        source={cartPNG}
                />
            </Header>
            <WrapperProduct>
               <ImageProduct
                     source={{ uri: product.image }}
                     resizeMode='contain'
               />
               <Name>
                  {product.name}
               </Name>
               <Info>
                  <ImageFlag
                        source={{ uri: product.flag }}
                        resizeMode='contain'
                  />
                  <InfoText>
                     {product.country}
                  </InfoText>
                  <InfoText>
                     {product.type}
                  </InfoText>
                  <InfoText>
                     {product.classification}
                  </InfoText>
                  <InfoText>
                     {product.size}
                  </InfoText>
               </Info>
               <Title>
                  Descrição 
               </Title>
               <Subtitle>
                  {product.sommelierComment}
               </Subtitle>
            </WrapperProduct>
            <Footer></Footer>
      </Container>
   );
}
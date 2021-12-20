import { renderHook, act } from '@testing-library/react-hooks';
import { CartProvider, useCart } from '../../hooks/cart';
// import { ProductCartProps } from '../../components/ProductCart';

describe('Cart Hook', () => {
    it('should be able to add a product to cart', async () => {
        const product = {
            id: 4,
            name: "acalhôa Quinta da Garrida Colheita Selecionada 2015",
            price: 96.9,
            image: "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png",
            quantity: 1
        }

        const cart = [product];

        const { result } = renderHook(() => useCart(), {
            wrapper: CartProvider
        });

        await act(() => result.current.addToCart(product));

        expect(result.current.cart).toEqual(cart);
    });

    it('should be able to remove a product to cart', async () => {
        const productId = 1;

        const product = {
            id: 4,
            name: "acalhôa Quinta da Garrida Colheita Selecionada 2015",
            price: 96.9,
            image: "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png",
            quantity: 1
        }

        const { result } = renderHook(() => useCart(), {
            wrapper: CartProvider
        });

        await act(() => result.current.addToCart(product));
        await act(() => result.current.removeToCart(productId));

        expect(result.current.cart).toEqual([]);
    });

    it('should be able to update a product quantity to cart', async () => {
        const productId = 1;
        const productQuantity = 2;

        const product = {
            id: 4,
            name: "acalhôa Quinta da Garrida Colheita Selecionada 2015",
            price: 96.9,
            image: "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png",
            quantity: 1
        };

        const { result } = renderHook(() => useCart(), {
            wrapper: CartProvider
        });

        await act(() => result.current.addToCart(product));

        await act(() => result.current.updateToCart(productId, productQuantity));

        expect(result.current.cart[0].quantity).toEqual(2);
    });
});
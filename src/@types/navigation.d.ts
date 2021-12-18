import { ProductProps } from '@types';

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            ProductDetail: ProductProps
            Cart: undefined;
        }
    }
}
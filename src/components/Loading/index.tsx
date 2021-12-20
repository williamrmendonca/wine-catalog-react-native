import LottieView from 'lottie-react-native';
import loadAnimation from '../../assets/load.json';


export function Loading({loading}){
   return(
      <>
        {
            loading
                ?
                <LottieView
                    source={loadAnimation}
                    style={{ width: '100%', height: 150, alignSelf: 'center' }}
                    resizeMode="contain"
                    autoPlay
                    loop
                />
                : null
        }
      </>
   );
}
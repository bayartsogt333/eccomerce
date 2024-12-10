import Header from './Header';
import Footer from './Footer';
import { createContext } from 'react';
import { useState } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';


export const ApplicationContext = createContext({ basket: [], setBasket: () => { } });

export default function Layout(props) {
    const { children } = props;
    const [basket, setBasket] = useState([]);



    return (
        //ged gaduur n tawiad ogcinoo. Tiimes durtai gazra ashiglana.
        <ApplicationContext.Provider value={{ basket: basket, setBasket: setBasket }}>
            <Header />
            {children}
            <Footer />
        </ApplicationContext.Provider>
    )
}
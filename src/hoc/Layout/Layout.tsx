import React, { ReactElement } from 'react';

import { Footer } from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

type LayoutProps = { children: ReactElement };

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
}

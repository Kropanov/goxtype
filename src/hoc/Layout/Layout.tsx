import React, {ReactElement} from 'react';
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

type LayoutProps = { children: ReactElement; };

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Header />
                {props.children}
            <Footer />
        </>
    );
}
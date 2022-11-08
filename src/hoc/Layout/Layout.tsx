import React, {ReactElement} from 'react';
import Header from "../../components/Header/Header";

type LayoutProps = { children: ReactElement; };

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Header />
            {props.children}
        </>
    );
}
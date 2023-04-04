import React from 'react';
import Cards from "../../components/Cards/Cards";
import TypingTest from "../../components/TypingTest/TypingTest";
import MobileQRCode from "../../components/QRCode/Mobile/MobileQRCode";

export default function Main() {
    return (
        <>
            <TypingTest />
            <MobileQRCode />
            <Cards />
        </>
    );
}
import React from 'react';

import { IconsType } from '../Types/Types';
import Icon from './Icon/Icon';

type IconsProps = {
    data: IconsType;
};

export default function Icons(props: IconsProps) {
    const { data } = props;
    return (
        <>
            {data.map((item, index) => (
                <Icon key={index} element={item.element} label={item.label} />
            ))}
        </>
    );
}

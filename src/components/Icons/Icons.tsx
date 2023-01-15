import React from 'react';
import Icon from './Icon/Icon';
import {IconsType} from '../../types/Types';

type IconsProps = {
    data: IconsType;
};

export default function Icons(props: IconsProps) {
    const {data} = props;
    return (
        <>
            { data.map((item, index) => (
                <Icon
                    key={index}
                    element={item.element}
                    label={item.label}
                />
            ) )}
        </>
    );
}
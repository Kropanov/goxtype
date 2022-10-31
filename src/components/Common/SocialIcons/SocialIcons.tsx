import React, {ReactNode} from 'react';
import SocialIcon from "./SocialIcon/SocialIcon";

type SocialIconsProps = {
    data: { icon: ReactNode; label: string; }[];
};

export default function SocialIcons(props: SocialIconsProps) {
    const {data} = props;
    return (
        <>
            { data.map((item, index) => (
                <SocialIcon
                    icon={item.icon}
                    key={index}
                    label={item.label}
                />
            ) )}
        </>
    );
}
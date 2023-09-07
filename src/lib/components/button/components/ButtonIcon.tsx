'use client';

import styled from '@emotion/styled';
import { ButtonSize, IconTypes } from '../Button';
import IconCalendar from './IconCalendar';
import IconDollar from './IconDollar';
import IconSize from './IconPlus';
import IconPlus from './IconPlus';
import { typographySize } from '@/styles/typography';
import { colors } from '@/styles/colorPalette';

type ButtonIconProps = {
    icon: IconTypes;
    color: string | undefined;
    size: ButtonSize;
};

export default function ButtonIcon({
    icon,
    color = colors.white,
    size,
}: ButtonIconProps) {
    let iconImage;

    /* eslint-disable */
    switch (icon) {
        case 'plus':
            iconImage = <IconPlus color={color} />;
            break;
        case 'calendar':
            iconImage = <IconCalendar color={color} />;
            break;
        case 'size':
            iconImage = <IconSize color={color} />;
            break;
        case 'dollar':
            iconImage = <IconDollar color={color} />;
            break;
    }
    /* eslint-enable */

    return <DivIcon size={size}>{iconImage}</DivIcon>;
}

type DivIconProps = {
    size: ButtonSize;
};

const DivIcon = styled.div<DivIconProps>`
    height: ${(props) =>
        props.size === 'sm' ? typographySize.medium : typographySize.mmLarge};
    padding-right: ${typographySize.tiny};
    display: flex;
    align-items: flex-start;
`;

//---TYPOGRAPHY
// In relation to the base resolution of 1512x982px, a note in px is added to all vw units.

import { colors } from './colorPalette';
import '../app/globals.css';
import styled from '@emotion/styled';

export const font = {
    boxingRegular: 'Boxing-Regular',
    exconBold: 'Excon-Bold',
    exconSemiBold: 'Excon-Medium',
    exconRegular: 'Excon-Regular',
};

export const fontSize = {
    small: '0.9vw', // 14px
    normal: '1.05vw', // 16px
    large: '1.6vw', // 24px
    xLarge: '2.4vw',
    huge: '4.2vw',
};

export const fontWeight = {
    normal: 400,
    semiBold: 500,
    bold: 700,
};

export const typographySize = {
    tiny: '0.4vw', // 6px
    xxSmall: '0.5vw', // 8px
    xSmall: '0.8vw', // 12px
    medium: '1.1vw', // 16px
    mmLarge: '1.6vw', // 24px
    mLarge: '2.1vw', // 32px
    large: '3.2vw', // 48px
};

export const H1 = styled.h1`
    font-family: ${font.boxingRegular};
    font-size: ${fontSize.huge};
    font-weight: ${fontWeight.normal};
    color: ${colors.black};
`;

export const H2 = styled.h2`
    font-family: ${font.boxingRegular};
    font-size: ${fontSize.xLarge};
    line-height: ${fontSize.xLarge};
    font-weight: ${fontWeight.normal};
    color: ${colors.black};
`;

export const H3 = styled.h3`
    font-family: ${font.exconBold};
    font-size: ${fontSize.large};
    line-height: 2.3vw;
    font-weight: ${fontWeight.bold};
    color: ${colors.black};
`;

export const H4Subhead = styled.h4`
    font-family: ${font.exconSemiBold};
    font-size: ${fontSize.normal};
    line-height: ${fontSize.large};
    font-weight: ${fontWeight.bold};
    color: ${colors.black};
`;

type PButtonProps = {
    color: string;
};

export const PButton = styled.p<PButtonProps>`
    font-family: ${font.exconSemiBold};
    font-size: ${fontSize.normal};
    line-height: ${fontSize.large};
    font-weight: ${fontWeight.semiBold};
    color: ${({ color }) => color};
`;

export const PCopy = styled.p`
    font-family: ${font.exconRegular};
    font-size: ${fontSize.normal};
    line-height: ${fontSize.large};
    font-weight: ${fontWeight.normal};
    color: ${colors.black};
`;

export const PLabel = styled.p`
    font-family: ${font.exconRegular};
    font-size: ${fontSize.small};
    line-height: ${fontSize.normal};
    font-weight: ${fontWeight.normal};
    color: ${colors.gray50};
`;

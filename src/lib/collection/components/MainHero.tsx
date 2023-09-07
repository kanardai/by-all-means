'use client';
import styled from '@emotion/styled';
import Image from 'next/image';
import { mediaSize } from '@/styles/mediaSize';
import { PCopy } from '@/styles/typography';
import heroGirl from '../images/girl-on-arrow.svg';
import heroNoResult from '../images/no-result.svg';
import { ReactNode } from 'react';

export type HeroType = 'heroGirl' | 'heroNoResult';

type MainHeroProps = {
    heroImage: HeroType;
    children: ReactNode;
};

export default function MainHero({ heroImage, children }: MainHeroProps) {
    const imageSrc = heroImage === 'heroGirl' ? heroGirl : heroNoResult;
    return (
        <>
            <ImgHero
                src={imageSrc}
                alt="hero image"
                priority={true}
                width={100}
                height={100}
            />
            <PInfo>{children}</PInfo>
        </>
    );
}

const ImgHero = styled(Image)`
    width: 66.2%;
    height: 33.1vw;
    max-height: 55vh;
    object-fit: contain;
    margin-top: 7.3%;
    @media (${mediaSize.height.medium}) {
        scale: 0.7;
        margin-top: 2%;
    }
`;

const PInfo = styled(PCopy)`
    width: 36%;
    text-align: center;
    margin-top: 3.7%;
    
    @media (${mediaSize.height.medium}) {
        margin-top: 1%;
    }
`;

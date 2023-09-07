'use client';

import { H2 } from '@/styles/typography';
import styled from '@emotion/styled';
import Image from 'next/image';
import closeIcon from './images/close.svg';

type TopSectionProps = {
    setShow: (close: boolean) => void;
};

export default function TopSection({ setShow }: TopSectionProps) {
    return (
        <SectionTop>
            <H2>
                Add sneakers
                <br /> to your collection
            </H2>
            <ButtonClose onClick={() => setShow(false)}>
                <Image src={closeIcon} alt="close icon" />
            </ButtonClose>
        </SectionTop>
    );
}

const SectionTop = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5.1vw 0 2.8vw 0;
`;

const ButtonClose = styled.button`
    all: initial;
    :active {
        transform: scale(1.5);
        transition: all 0.2s linear;
    }
`;

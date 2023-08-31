'use client';

import styled from '@emotion/styled';
import heroImg from './images/man-in-shoes.png';
import Image from 'next/image';
import { DivAppContainer } from '@/styles/styled-components';
import { H1, PCopy } from '@/styles/typography';
import { colors } from '@/styles/colorPalette';
import { mediaSize } from '@/styles/mediaSize';
import Button from '../components/Buttons';

export default function Start() {
    return (
        <DivAppContainer>
            <DivWrapper data-name="Welcome Screen">
                <ImgHero src={heroImg} alt="man in shoes" />
                <DivWelcome data-name="Welcome Text">
                    <H1>Welcome to a sneaker collector</H1>
                    <PCopy>
                        <br />
                        This tool not only lets you showcase your prized sneaker
                        collection but also provides you with the tools to
                        curate, organize, and catalogue your sneakers <br />{' '}
                        like never before.
                    </PCopy>
                    <Button
                        size={'lg'}
                        marginTop="3.7vw"
                        textColor={colors.white}
                    >
                        Start your new collection
                    </Button>
                </DivWelcome>
            </DivWrapper>
        </DivAppContainer>
    );
}

const DivWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
`;

const ImgHero = styled(Image)`
    width: 58%;
    height: 100%;
    object-fit: contain;
`;

const DivWelcome = styled.div`
    width: 32.3%;
    margin-left: 9%;
    @media (${mediaSize.height.small}) {
        scale: 0.7;
    }
`;

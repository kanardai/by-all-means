'use client';

import styled from '@emotion/styled';
import heroImg from './images/man-in-shoes.svg';
import Image from 'next/image';
import { DivAppContainer } from '@/styles/styled-components';
import { H1, PCopy } from '@/styles/typography';
import { colors } from '@/styles/colorPalette';
import { mediaSize } from '@/styles/mediaSize';
import { useRouter } from 'next/navigation';
import Button from '../components/button/Button';

export default function Start() {
    const router = useRouter();

    function clickHandler() {
        router.push('/main');
    }

    return (
        <DivAppContainer>
            <DivWrapper data-name="Welcome Screen">
                <ImgHero
                    src={heroImg}
                    alt="man in shoes"
                    priority={true}
                    width={100}
                    height={100}
                />
                <DivWelcome data-name="Welcome Text">
                    <H1>Welcome to a sneaker collector</H1>
                    <PCopy style={{ marginBottom: '3.7vw' }}>
                        <br />
                        This tool not only lets you showcase your prized sneaker
                        collection but also provides you with the tools to
                        curate, organize, and catalogue your sneakers <br />{' '}
                        like never before.
                    </PCopy>
                    <Button
                        color={colors.white}
                        clickHandler={clickHandler}
                        width="16.9vw"
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
    @media (${mediaSize.width.mediaMobile}) {
        flex-direction: column;
    }
`;

const ImgHero = styled(Image)`
    width: 58%;
    height: 100%;
    object-fit: contain;
    @media (${mediaSize.width.mediaMobile}) {
        width: 100%;
    }
`;

const DivWelcome = styled.div`
    width: 32.3%;
    margin-left: 9%;
    @media (${mediaSize.width.mediaMobile}) {
        margin-top: 10vh;
        scale: 1.7;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
`;

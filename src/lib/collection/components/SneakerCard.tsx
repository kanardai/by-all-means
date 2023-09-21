'use client';
import { colors } from '@/styles/colorPalette';
import { H3, H4Subhead, PCopy, typographySize } from '@/styles/typography';
import { SneakerInfo } from '@/types';
import styled from '@emotion/styled';
import trashIcon from './images/trash.svg';
import Image from 'next/image';

type SneakerCardProps = {
    sneaker: SneakerInfo;
    deleteHandler: (sneakerId: string) => void;
};

export default function SneakerCard({
    deleteHandler,
    sneaker,
}: SneakerCardProps) {
    return (
        <DivCard>
            <section>
                <SectionTop>
                    <H3>{sneaker.sneakerName}</H3>
                    <ButtonClose onClick={() => deleteHandler(sneaker._id!)}>
                        <ImageIcon src={trashIcon} alt="close icon" />
                    </ButtonClose>
                </SectionTop>

                <PCopy>{sneaker.brand}</PCopy>
            </section>
            <DivInfo>
                <DivDetail>
                    <H4Subhead>{sneaker.year}</H4Subhead>
                    <PCopy>Year</PCopy>
                </DivDetail>
                <DivDetail>
                    <H4Subhead>{sneaker.size}</H4Subhead>
                    <PCopy>Size</PCopy>
                </DivDetail>
                <DivDetail>
                    <H4Subhead>{sneaker.price}</H4Subhead>
                    <PCopy>Price</PCopy>
                </DivDetail>
            </DivInfo>
        </DivCard>
    );
}

const DivCard = styled.div`
    background-color: ${colors.white};
    box-shadow: 0px 3px 5px ${colors.gray50};
    border-radius: ${typographySize.xSmall};
    width: 28vw;
    aspect-ratio: 16/7;
    padding: ${typographySize.mmLarge};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    animation: fadeIn 0.5s ease-in-out forwards;
`;

const DivInfo = styled.div`
    display: flex;
`;

const DivDetail = styled.div`
    width: 100%;
    &:not(:first-of-type) {
        padding-left: ${typographySize.medium};
        border-left: solid 1px ${colors.gray80};
    }
`;

const SectionTop = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ButtonClose = styled.button`
    all: initial;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: flex-start;
    :active {
        transform: scale(1.5);
        transition: all 0.2s linear;
    }
`;

const ImageIcon = styled(Image)`
    width: ${typographySize.mmLarge};
    height: ${typographySize.mmLarge};
    max-height: ${typographySize.mmLarge};
`;

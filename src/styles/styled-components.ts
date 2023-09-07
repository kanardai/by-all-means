import styled from '@emotion/styled';
import { mediaSize } from './mediaSize';

//--- container for whole app

export const DivAppContainer = styled.div`
    display: flex;
    align-items: center;
    @media (${mediaSize.width.mediaLaptop}) {
        width: 86.8vw;
        height: 52.3vw;
        max-height: 90vh;
        margin: 3.5vw auto;
    }
    @media (${mediaSize.width.mediaMobile}) {
        width: 85vw;
        height: 90vh;
        max-height: 90vh;
        margin: 3.5vw auto;
    }

    @media (${mediaSize.height.medium}) {
        max-height: 80vh;
    }
`;

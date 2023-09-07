'use client';

import { colors } from '@/styles/colorPalette';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

type SidebarContainerProps = {
    children: ReactNode;
    show: boolean;
};

export default function SidebarContainer({
    children,
    show,
}: SidebarContainerProps) {
    return (
        <DivOuterWrapper style={{ zIndex: '12' }} show={show}>
            <DivBackdrop show={show} />
            <DivSidebarContainer show={show}>
                <DivSidebar show={show}>
                    <DivInnerWrapper>{children}</DivInnerWrapper>
                </DivSidebar>
            </DivSidebarContainer>
        </DivOuterWrapper>
    );
}

type DivSidebarProps = {
    show: boolean;
};

const DivSidebar = styled.div<DivSidebarProps>`
    position: relative;
    background-color: ${colors.white};
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(100%)')};
    animation: ${(props) => (props.show ? slideIn : slideOut)} 0.5s ease-in-out;
    transition: transform 0.5s ease-in-out;
    transform-origin: right center;
`;

const DivSidebarContainer = styled.div<DivSidebarProps>`
    width: 34.7vw;
    height: 100vh;
    top: 0;
    right: 0;
    position: absolute;
    background-color: transparent;
    z-index: 10;
    overflow: hidden;
    display: flex;
    align-items: center;
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
    animation: ${(props) => (props.show ? fadeInContainer : fadeOutContainer)}
        0.5s linear;
    transition: visibility 1s linear;
`;

const DivBackdrop = styled.div<DivSidebarProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${`${colors.black}60`};
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
    animation: ${(props) => (props.show ? fadeIn : fadeOut)} 0.5s linear;
    transition: visibility 0.5s linear;
`;

const DivInnerWrapper = styled.div`
    width: 82%;
`;

type DivOuterWrapperProps = {
    show: boolean;
};

const DivOuterWrapper = styled.div<DivOuterWrapperProps>`
    visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`;

export const fadeIn = keyframes`
    from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
`;

export const fadeOut = keyframes`
    from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
`;
export const slideIn = keyframes`
  from {
    transform: translateX(100%);
    
  }
  to {
    transform: translateX(0);
    
  }
`;
export const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const fadeInContainer = keyframes`
    0% {
            opacity: 0;
        }
    20% {
            opacity: 1;
        }
    100% {
            opacity: 1;
        }
`;
export const fadeOutContainer = keyframes`
    0% {
            opacity: 1;
        }
    80% {
            opacity: 1;
        }
    100% {
            opacity: 0;
        }
`;

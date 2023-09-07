'use client';

import { H1 } from '@/styles/typography';
import styled from '@emotion/styled';
import TextField from './TextField';
import { colors } from '@/styles/colorPalette';
import { mediaSize } from '@/styles/mediaSize';
import { SidebarContent } from '../sidebar/Sidebar';
import { ChangeEvent, useState } from 'react';
import Button from './button/Button';

type NavbarProps = {
    search: string;
    setSearch: (searchValue: string) => void;
    setShowSidebar: (showSidebar: boolean) => void;
    setSidebarContent: (content: SidebarContent) => void;
};

export default function Navbar({
    search,
    setSearch,
    setShowSidebar,
    setSidebarContent,
}: NavbarProps) {
    function sidebarHandler() {
        setShowSidebar(true);
        setSidebarContent('add');
    }

    function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

    return (
        <DivNavbar>
            <H1>Your collection</H1>
            <TextField
                searchIcon
                inputName="searchInput"
                inputOnChange={handleSearchChange}
                inputValue={search}
            />

            <Button
                icon="plus"
                clickHandler={sidebarHandler}
                color={colors.white}
            >
                Add new sneakers
            </Button>
        </DivNavbar>
    );
}

const DivNavbar = styled.div`
    width: 100%;
    align-items: center; /* Vertikální centrování obsahu */
    display: grid;
    grid-template-columns: 58% 21.6% 18%;
    gap: 1.1vw;
    margin-top: 4.5%;
    @media (${mediaSize.height.medium}) {
        scale: 0.7;
    }
`;

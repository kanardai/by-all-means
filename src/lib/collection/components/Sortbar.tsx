'use client';

import Button from '@/lib/components/button/Button';
import { colors } from '@/styles/colorPalette';
import { H3, PLabel, typographySize } from '@/styles/typography';
import { Sorting } from '@/types';
import styled from '@emotion/styled';
import { useState } from 'react';

type SortbarProps = {
    search: string;
    length: number;
    setSort: (sort: Sorting) => void;
};

export default function Sortbar({ length, search, setSort }: SortbarProps) {
    const [activeSort, setActiveSort] = useState<Sorting>('year');

    const handleSortChange = (sorting: Sorting) => {
        setActiveSort(sorting);
        setSort(sorting);
    };

    return (
        <DivSortbar>
            {search && (
                <DivSearchResult>
                    <PLabel>Search results for</PLabel>
                    <H3>{`${search} (${length})`}</H3>
                </DivSearchResult>
            )}
            <DivSorting>
                <PLabel>Sort by:</PLabel>

                <Button
                    color={activeSort === 'year' ? colors.white : colors.black}
                    width="fit-content"
                    size="sm"
                    icon="calendar"
                    active={activeSort === 'year'}
                    clickHandler={() => handleSortChange('year')}
                >
                    Oldest Year
                </Button>
                <Button
                    color={activeSort === 'size' ? colors.white : colors.black}
                    width="fit-content"
                    size="sm"
                    icon="size"
                    active={activeSort === 'size'}
                    clickHandler={() => handleSortChange('size')}
                >
                    Smallest Size
                </Button>
                <Button
                    color={activeSort === 'price' ? colors.white : colors.black}
                    width="fit-content"
                    size="sm"
                    icon="dollar"
                    active={activeSort === 'price'}
                    clickHandler={() => handleSortChange('price')}
                >
                    Lowest Price
                </Button>
            </DivSorting>
        </DivSortbar>
    );
}

const DivSortbar = styled.div`
    width: 100%;
    height: 3.3vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${typographySize.large};
`;

const DivSearchResult = styled.div``;

const DivSorting = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    width: fit-content;
    gap: 0.8vw;
`;

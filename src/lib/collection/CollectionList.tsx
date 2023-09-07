'use client';
import { deleteSneaker, getSneakers } from '@/services/backendServices';
import { SneakerInfo, Sorting } from '@/types';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import SneakerCard from './components/SneakerCard';
import { mediaSize } from '@/styles/mediaSize';
import { filterCollection } from '@/utils/filterCollection';
import MainHero from './components/MainHero';
import Sortbar from './components/Sortbar';
import { sortCollection } from '@/utils/sortCollection';
import { testData } from '@/services/testData';

type CollectionListProps = {
    search: string;
    showSidebar: boolean;
};

// main component
export default function CollectionList({
    search,
    showSidebar,
}: CollectionListProps) {
    const [sneakers, setSneakers] = useState<SneakerInfo[] | undefined>();
    const [sort, setSort] = useState<Sorting>('year');

    async function fetchData() {
        try {
            const data = await getSneakers();
            setSneakers(data);
        } catch (error) {
            console.error('Error fetching sneakers:', error);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 500);
    }, [showSidebar]);

    const filteredSneakers = filterCollection(sneakers, search);
    const sortedSneakers = sortCollection(filteredSneakers, sort);

    async function deleteHandler(id: string) {
        await deleteSneaker(id);
        fetchData();
    }

    return (
        <DivCollection>
            {' '}
            {filteredSneakers?.length === 0 && search ? ( // condition no search found
                <MainHero heroImage={'heroNoResult'}>
                    Search better. <br />
                    There is nothing like this in your collection.
                </MainHero>
            ) : filteredSneakers?.length ? ( // condition all visible or search found
                <>
                    <Sortbar
                        search={search}
                        length={filteredSneakers.length}
                        setSort={setSort}
                    />
                    {sortedSneakers?.map((sneaker) => (
                        <SneakerCard
                            key={sneaker._id}
                            sneaker={sneaker}
                            deleteHandler={(id: string) => deleteHandler(id)}
                        />
                    ))}
                </>
            ) : (
                // every other situation
                <MainHero heroImage={'heroGirl'}>
                    Seem’s like you still didn’t add
                    <br /> any new sneaker to your collection
                </MainHero>
            )}
        </DivCollection>
    );
}

const DivCollection = styled.div`
    width: 100%;
    display: flex;
    flex-flow: wrap;
    gap: 1vw;
    justify-content: center;
    @media (${mediaSize.height.medium}) {
        scale: 0.7;
    }
`;

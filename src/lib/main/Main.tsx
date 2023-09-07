'use client';

import { DivAppContainer } from '@/styles/styled-components';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import CollectionList from '../collection/CollectionList';
import Sidebar, { SidebarContent } from '../sidebar/Sidebar';

export default function Main() {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const [sidebarContent, setSidebarContent] = useState<SidebarContent>('add');
    const [search, setSearch] = useState<string>('');

    return (
        <>
            <DivAppContainer style={{ flexDirection: 'column' }}>
                <Navbar
                    setShowSidebar={setShowSidebar}
                    setSidebarContent={setSidebarContent}
                    search={search}
                    setSearch={setSearch}
                />
                <Sidebar
                    show={showSidebar}
                    setShow={setShowSidebar}
                    content={sidebarContent}
                />
                <CollectionList search={search} />
            </DivAppContainer>
        </>
    );
}

'use client';

import SidebarContainer from './components/Sidebar.styled';
import AddNewSneaker from './components/AddNew';
import TopSection from './components/TopSection';

type SidebarProps = {
    content: SidebarContent;
    setShow: (close: boolean) => void;
    show: boolean;
};

export type SidebarContent = 'add' | 'delete';

// main component
export default function Sidebar({ content, show, setShow }: SidebarProps) {
    return (
        <SidebarContainer show={show}>
            {' '}
            <TopSection setShow={setShow} />
            {content === 'add' && <AddNewSneaker setShowSidebar={setShow} />}
            
        </SidebarContainer>
    );
}

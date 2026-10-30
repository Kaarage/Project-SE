import './HomePage.css';
import type { ComponentProps } from 'react';
import { SideBar } from '../../components/SideBar';
import { HomePageContent } from './HomePageContent';



export function HomePage({ selected, setSelected, sidebarItems }: ComponentProps<typeof SideBar>) {
    setSelected("Home")
    return (
        <>
            <title>EduMatch SG</title>
            <div className="app-layout">
                <SideBar 
                    selected={selected}
                    setSelected={setSelected}
                    sidebarItems={sidebarItems}
                />
                <HomePageContent 
                    selected={selected}
                />

            </div>
        </>
        
    );
}
import type { ComponentProps } from 'react';
import { SideBar } from '../../components/SideBar';
import { ShortlistContent } from './ShortlistContent';


export function Shortlist({ selected, setSelected, sidebarItems }: ComponentProps<typeof SideBar>) {
    setSelected("Shortlist")
    return (
        <>
            <title>Shortlist</title>
            <div className='app-layout'>
                <SideBar 
                    selected={selected}
                    setSelected={setSelected}
                    sidebarItems={sidebarItems}
                />

                <ShortlistContent
                    selected={selected}
                />
            </div>

            
        </>
        
    );
}
import type { ComponentProps } from 'react';
import { SideBar } from '../../components/SideBar';
import { SearchSchoolsContent } from './SearchSchoolsContent';


export function SearchSchools({ selected, setSelected, sidebarItems }: ComponentProps<typeof SideBar>) {
    setSelected("Search Schools")
    return (
        <>
            <title>Search Schools</title>
            <div className='app-layout'>
                <SideBar 
                    selected={selected}
                    setSelected={setSelected}
                    sidebarItems={sidebarItems}
                />

                <SearchSchoolsContent 
                    selected={selected}
                />
            </div>

            
        </>
        
    );
}
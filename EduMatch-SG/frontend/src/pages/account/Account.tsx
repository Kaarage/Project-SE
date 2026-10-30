import type { ComponentProps } from 'react';
import { SideBar } from '../../components/SideBar';
import { AccountContent } from './AccountContent';


export function Account({ selected, setSelected, sidebarItems }: ComponentProps<typeof SideBar>) {
    setSelected("Account")
    return (
        <>
            <title>Account</title>
            <div className='app-layout'>
                <SideBar 
                    selected={selected}
                    setSelected={setSelected}
                    sidebarItems={sidebarItems}
                />

                <AccountContent
                    selected={selected}
                />
            </div>

            
        </>
        
    );
}
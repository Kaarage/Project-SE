import { Header } from "../../components/Header";

export function AccountContent({ selected }: { selected: string }) {

    return(
        <>
            <div className="main">
                <Header 
                    selected= {selected}
                />
                <div>
                    content goes here
                </div>
            </div>
            
        </>
    );
}
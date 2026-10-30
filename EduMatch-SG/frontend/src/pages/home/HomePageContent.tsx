import { Header } from "../../components/Header";
import './HomePageContent.css';
import { HomeFunctions } from './HomeFunctions';
import { StudentProfiles } from "./StudentProfiles";

export function HomePageContent({ selected }: { selected: string }) {
    return (
        <div className="main">
            <Header 
                selected={selected}
            />
            <div className="content-container">
                <div className="greeting-text">
                    Good morning, <span className="user-name">Guest</span>
                </div>

                <div className="student-info-text">
                    Everything below applies to student: <span className="student-name">John Doe</span>
                </div>

                <HomeFunctions />
                
                <StudentProfiles />

            </div>

            
        </div>
    );
}
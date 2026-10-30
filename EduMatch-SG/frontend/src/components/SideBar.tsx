import './SideBar.css';
import { useNavigate } from 'react-router';

export function SideBar({ selected, setSelected, sidebarItems }: {
    selected: string;
    setSelected: (selected: string) => void;
    sidebarItems: string[];
}) {
    const routes: Record<string, string> = {
      "Home": "/",
      "Search Schools": "/search-schools",
      "Shortlist": "/shortlist",
      "Account": "/account"
    };
    const navigate = useNavigate();

    return (

        <div className="sidebar">
            <div className="logo-container">
                <div>
                    <img src="src/assets/stupidcat.jpg" className="logo-img"/>
                </div>

                <div className="sidebar-text-container">
                    <div className="sidebar-title-text">
                        EduMatch
                    </div>
                    <div className="sidebar-country-text">
                        SINGAPORE
                    </div>
                </div>
            </div>

            <div className="sidebar-menu-container">

                <div className="student-select-container">
                    <select className="student-select">
                        <option>John Doe</option>
                        <option>Aisha (Daughter)</option>
                    </select>
                </div>

                {sidebarItems.map((item) => (
                    <button
                        key={item}
                        className={`sidebar-button ${
                            selected === item ? "active" : ""
                        } `}
                        onClick={() => {
                            setSelected(item);
                            navigate(routes[item]);
                        }
                        }> 
                        <img src="src/assets/stupidcat.jpg" className="home-icon"/>
                        <span className="sidebar-text">{item} </span>
                    </button>))
                }

            </div>


        </div>
    );
}
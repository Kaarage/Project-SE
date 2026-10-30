import './Header.css';

export function Header({ selected }: { selected: string }) {
    return(
        <div className="header-container">
            <div className="header-text">
                {selected}
            </div>

            <button className='login-button'> Login </button>
            <input type="text" className="search-bar" placeholder="Search..."/>

        </div>
    );
}
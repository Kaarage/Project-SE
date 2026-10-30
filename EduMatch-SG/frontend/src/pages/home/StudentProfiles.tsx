import './StudentProfiles.css'
export function StudentProfiles () {
    return (
        <>
            <div>
                <div className="student-profile-header">
                    Student Profiles
                </div>

                <div className='student-profile-container'>
                    <div className='student-profile student-active'>
                        <div className='student-name-container'>
                            <img src="src/assets/stupidcat.jpg" className="student-profile-icon"/>
                            <div className='active-info'>
                                <span className='student-name'> Name (Relation)</span>
                                <span className='active-text'>  Active Student </span>
                            </div>

                            <button className='active-button'>
                                ✓ Active
                            </button>
                        </div>

                        <div className='student-stat-container'>
                            <div className='student-stat'>
                                <div className='stat-header'>PSLE AL</div>
                                <div className='stat-info'>12</div>
                            </div>
                            <div className='student-stat'>
                                <div className='stat-header'>POSTAL</div>
                                <div className='stat-info'>123456</div>
                            </div>
                            <div className='student-stat'>
                                <div className='stat-header'>PSLE AL</div>
                                <div className='stat-info'>12</div>
                            </div>
                        </div>

                        <div className='student-customize-container'>
                            <button className='edit-button'>Edit</button>
                            <button className='shortlist-button'>Shortlist</button>
                        </div>
                        
                    </div>
                    <div className="add-profile">
                        <div className='add-profile-container'>
                            <img src="src/assets/addicon.jpg" className="add-student-icon"/>
                            <span className='add-profile-text'>Create a new profile</span>
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
        </>
    );
}


//settings icon -> links to settings page 
//

const AssignmentsPageNavBar = () => {

    return (
            <nav className="navbar">
                <h1>Assignments</h1>

                <ul className="links">

                    <li>
                        <a href= "/create">Back to Main Menu</a>
                    </li>
                    <li>
                        <a href= "/create">Settings</a>
                    </li>

                </ul>
            </nav>
    ); 
}

export default AssignmentsPageNavBar
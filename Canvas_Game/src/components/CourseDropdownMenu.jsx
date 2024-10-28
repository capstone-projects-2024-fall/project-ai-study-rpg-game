const CourseDropdownMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState("");

    const courses = props.course; 

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClassSelect = (course) => {  //selected class
        setIsOpen(false);
        setSelectedCourse(course);  //selects course to explore
    };

    return (
        <div className="ClassDropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
                Select a Class
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    {courses.map((course) => (
                        <button onClick={() => handleClassSelect(course)} >
                            {course}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );

}
export default CourseDropdownMenu
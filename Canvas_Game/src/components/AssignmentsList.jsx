const AssignmentList = (props) => {
    //category ie tests etc
        //assignment name, due date, points

    //for all items in thisclass.test
        //print info on test

    const assignments = props.assignments; 
    //const categories = props.category;    //grab this from database queries right

    

    return(
        <>
            <div className="AssignmentList">
                
                {assignments.map((assignment) => (  //SWITCH BACK TO CATEGORIES, SORT BY NAME
                    <div className='category-list' key ={assignment.id}>
                        <h2>{assignment.title}</h2>             
                    </div>
                   // console.log(assignment) 
                ))}
            </div>
        </>
    );
}

export default AssignmentList

//displayAssignments(char category){
    //assignments[] = category.assignments[] 
    //for all assingments in category
        //display whatever
//}
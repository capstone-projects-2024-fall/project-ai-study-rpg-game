import React from "react";

/*Lists Items based on Category input: CategorizedAssignmentList*/
    //need an on/off settings toggle for categories 

const AssignmentsListItem = (props) => {

    const cat = props.cat; 
    const assignmentsList = props.assList; 

    //filters assignments by category --> might have to change for db call (maybe use inmap filter)
    const filterByCat = (newCat) =>{
        return assignmentsList.filter(assignments=>assignments.category===newCat); 
    };

    const filteredAssignments = filterByCat(cat); 


    return(
        <>
            <div className='filteredAssList'>
                {filteredAssignments.map((assignmentItem) => (
                            <div className = 'assItem' key = {assignmentItem.id}>
                                <h2>{assignmentItem.title}</h2>     {/*PUT GENERATE ASSIGNMENT CARD HERE - should be an option to add status*/}
                            </div>
                ))}
            </div>
        </>
    )


}
export default AssignmentsListItem 


//NO PROPS

//import AssignmentListItems from './AssignmentListItems'; 
import React from "react";

const AssignmentsListDUMMY = () => {
    //category ie tests etc
        //assignment name, due date, points

    //for all items in thisclass.test
        //print info on test
    //need scroll bar with classes

    //have to add something to sort shit into classes
    return(
            <div className="AssignmentList">
                <p>in assignments list</p>
                {/*categories.map((category) => (  //for all categories in key
                    <div className='category-list' key ={category}>
                        <h2>{category}</h2>    
                 */   
                        {/*<ul> //uncomment when you get program to actually work
                            {assignments.map((assignment) => (
                                if(category === assignment.category){
                                    <li key = {assignment.id}> 
                                        <h2>{assigment.title}</h2>
                                        <p>{assigment.due_date}</p>
                                    </li>
                                }
                                //for all assignments in category, add info to list ->
                                //<AssignmentListItem thisCat = {catgory} assignments = {assignments}></AssignmentListItem>
                            ))}
                            
                            </ul>*/}
                         
                    /*</div>
                ))*/}

            </div>
    );

}

export default AssignmentsListDUMMY

//displayAssignments(char category){
    //assignments[] = category.assignments[] 
    //for all assingments in category
        //display whatever
//}

/*
    const AssignmentListItem = (props) => {
        thisCategory = props.thisCat
        //for all assingments in assignments
            //if assignment.cat = thisCat
                //display info about this assignment
    }
    export default AssignmentListItem
*/
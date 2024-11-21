
//NO PROPS

//import AssignmentListItems from './AssignmentListItems'; 
import React from "react";
import {assignments, courses, categories} from './data/mockAssignmentsData.js';
import Team from './team.jsx'; 

const AssignmentsListDUMMY = () => {
    //category ie tests etc
        //assignment name, due date, points
        //button that says strt assignment and moves it to the board


    return(
            <div className="AssignmentList">
            
                <Team></Team>
            
            </div>
    );

}

export default AssignmentsListDUMMY


/*
    const AssignmentListItem = (props) => {
        thisCategory = props.thisCat
        //for all assingments in assignments
            //if assignment.cat = thisCat
                //display info about this assignment
    }
    export default AssignmentListItem
*/
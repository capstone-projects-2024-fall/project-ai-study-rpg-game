//TEST TO RUN AsSIGNMENTS PAge



import { useState } from "react"; 
import React from "react";

//formatting --> more options on dashboard and userprofile
import {
    Box,
    // Button,
    // IconButton,
    // Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
import { tokens } from "./theme";


import AssignmentsPageNavBar from './AssignmentsPageNavBar.jsx';
import AssignmentsList from './AssignmentsList.jsx';
import AssignmentsListDUMMY from './AssignmentsListDUMMYComp.jsx';

import GameMapInProgressBar from './GameMapInProgressBar.jsx';

import CourseDropdownMenu from "./AssignmentsCourseDropdownMenu.jsx";


const AssignmentsPage = () => {
    //sets theme 
   /* const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    //adjusts based on device size
    const isXlDevices = useMediaQuery("(min-width: 1260px)");
    const isMdDevices = useMediaQuery("(min-width: 724px)");
    const isXsDevices = useMediaQuery("(max-width: 436px)");
*/


    return (
        <>
            <Box m="20px">



                {/*<div className = "AssignmentsListDummy">
                    <AssignmentsListDUMMY></AssignmentsListDUMMY>
                </div>
                <div>
                    <GameMapInProgressBar></GameMapInProgressBar>
                </div>*/}


                {/*<div className="AssignmentsPage">
                    <AssignmentsPageNavBar></AssignmentsPageNavBar>
                    
                </div>*/}
                {/*<div className="courseDropdown">
                    <CourseDropdownMenu></CourseDropdownMenu>
                </div>*/}


                {/*<div className="AssignmentList">
                    <AssignmentsList assignments = {assignments} course = {course} category = {category}></AssignmentsList>
                </div>*/}
            </Box>
        </>
    ); 
}
export default AssignmentsPage
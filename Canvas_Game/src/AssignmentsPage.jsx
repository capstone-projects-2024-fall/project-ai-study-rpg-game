import React from "react";
import { useState } from "react"; 

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

//imported components
import CourseDropdownMenu from './AssignmentsCourseDropdownMenu.jsx';
import CourseAssignmentsList from './CourseAssignmentsList.jsx'; 

/*pick course you want to look at, assignments are displayed in a categorised list, can adjust settings*/
    //settings:should have toggle if you dont want categories --> can do that later/ also should be able to change/add categories

const AssignmentsPage = () => {
    //sets theme 
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    //adjusts based on device size
    const isXlDevices = useMediaQuery("(min-width: 1260px)");
    const isMdDevices = useMediaQuery("(min-width: 724px)");
    const isXsDevices = useMediaQuery("(max-width: 436px)");

    //function to get course selection from dropdown menu
    const[courseValue, setCourseValue] = useState(''); 
    
    //send to CourseDropdownMenu to change courseValue var to whatever is selected from the dropdown menu 
    const onCourseSelectedFromCDM = (selectedCourse) =>{ 
        setCourseValue(selectedCourse); 
        console.log(courseValue); //testing 
    }



    //THIS WILL GO ON SIGNUP FORM IN ACTUAL GAME
    //invoke getAssignments function in py after canvas token is input !!
    const [message,setMessage] = useState(''); 
    const TEMPCanvasKey = '9957~QLWQPz7QEXtPfuWYRrQMyZFrHTthM2r9RUDGNEXMLAHBArmB729ycM66fhYBy4xu' //this is going to be formData.canvasKey in signup page
    const getAssignmentsFromCanvas = async(e) => {
        e.preventDefault();

        try {

            //idk just copy api assignment
            //const fetchData = async () => {
                //const result = await fetch(URL, {method: 'POST', headers:{}}); 
                //const jsonResult = await result.json(); 
                //console.log(result)
                //setAssignments(jsonResult); 

            //}

            //then u use assignments to send data to backend
            //this is for putting data into app.py

            //invokes getCourseAndAssignmentsInfoFromCanvas function in app.py: 
            const getAssignmentResponse = await fetch('http://localhost:5000/getCourseAndAssignmentsInfoFromCanvas', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    canvasKey: TEMPCanvasKey,
                }),
            });

        } catch (error) {
            setMessage('Failed to connect to the server. Please try again later.');
        }
    }


    return (
        <>
            <Box m="20px">
                <div className="AssignmentList">
                    <CourseDropdownMenu courseValueSelected = {onCourseSelectedFromCDM}></CourseDropdownMenu>
                    <CourseAssignmentsList courseValueSelected = {courseValue}></CourseAssignmentsList>
                    <button onClick={getAssignmentsFromCanvas}>Import Assignments from Canvas</button>
                </div>

                {/*<div>
                    <GameMapInProgressBar></GameMapInProgressBar>
                </div>*/}
       
            </Box>
        </>
    ); 
}
export default AssignmentsPage



//OUTLINE/NOTES

//outline 
    //Assignments Nav bar: title, settings btn, back to main menu btn 

//TEST TO RUN AsSIGNMENTS PAGE
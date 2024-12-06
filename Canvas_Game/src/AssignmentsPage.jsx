import React from "react";
import { useState, useEffect } from "react"; 

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

const AssignmentsPage = ({email}) => {      //gonna get assignments from backend by email
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

    
    
    //on assignmentsPage being clicked on - call up course_name and course_id's w/ this.user_id
        //need to GET: course_name, course_id from back end 

  // Fetch all assignments from the backend

    const [courseNameList, setCourseNameList] = useState([])
    const [tempCourseName, setTempCourseName] = useState()

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`http://localhost:5000/coursesFromDb?email=${email}`);  //fetches {python function} from backend and sends email as a query param
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }

        const data = await response.json(); //gets data from backend
        //console.log(data)   //testing testing

        data.courses.forEach((course) => {    //for each course in data, course is:
            //setTempCourseName(course.course_name)
            //setCourseNameList([...courseNameList, tempCourseName ])
            //console.log(course.course_name)
            // Default all tasks to 'Undecided' if there's no clear status
          /*tasksByColumn[task.in_game_status || 'Undecided'].push({  //puts tasks into columns based on task.in_game_status for each task
            id: task.id, // You might need to include this in your backend response
            title: task.assignment_name,
            description: task.assignment_description,
            course: task.course_name,
            due_at: task.due_at,
          });*/ 
          
         console.log(course)
        });
        //console.log(courseNameList)   //testing testing

        //setTasks(tasksByColumn);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, [email]);



    //when course selected -> pass that into courseAssignmentsList
    //when courseAssignmentsList is invoked -> call up assignments list in that function 

    return (
        <>
            <Box m="20px">
                <div className="AssignmentList">
                    <CourseDropdownMenu courseValueSelected = {onCourseSelectedFromCDM}></CourseDropdownMenu>
                    <CourseAssignmentsList courseValueSelected = {courseValue}></CourseAssignmentsList>
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
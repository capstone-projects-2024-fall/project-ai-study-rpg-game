import React from "react";
import {useState, useEffect} from "react"

import {assignments, categories, courses} from './data/mockAssignmentsData.js';
import CategorizedAssignmentsList from './CategorizedAssignmentsList.jsx';


/*Makes a categorized list of assignments for a class: CourseAssignmentsList 
    //should be sorted by most recent date 
    //new assignments should be added when they are created in canvas, but thats true for the whole program 
*/

const CourseAssignmentsList= (props) => {    //could do: {courseValueSelected}
    //list with header and cards
    
    const course = props.courseValueSelected; 
    const email=props.email;

    
    const[assignmentList, setAssignmentList] = useState([])

    // Fetch all assignments from the backend
    useEffect(() => {
        const fetchAllAssignmentsFromDB = async () => {
            try {
                const response = await fetch(`http://localhost:5000/getAllAssignmentsFromDb?email=${email}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch tasks');
                }

                const data = await response.json();
                
                const assList = []

                data.assignments.forEach((task) => {
                    assList.push({
                        id: task.id,
                        assignment_id: task.assignment_id, //id
                        user_id: task.user_id,
                        assignment_name: task.assignment_name,
                        assignment_description: task.assignment_description,
                        due_at: task.due_at,
                        course_id: task.course_id, 
                        submission_types: task.submission_types,
                        points_possible: task.points_possible,  //took out published !! dont really need it 
                        in_game_status: task.in_game_status,    //"Undecided", "To Do", "In Progress", "Done"
                        is_submitted: task.is_submitted,    
                        assignment_url: task.assignment_url,
                    })
                });
                console.log(assList)
                setAssignmentList(assList);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchAllAssignmentsFromDB();
    }, [email]);

    //if subtype == online_quiz
        //filter by quiz
    //else if subtype == online_test
        //filterbytest
    //else
        //return assignmentlist

    //if sortByCat


    //filters assignments by course --> might have to change for db call (maybe use inmap filter)
    const filterByCourse = (newCourse) =>{
        if(newCourse == 'All Courses'){
            return assignmentList; 
        }
        return assignmentList.filter(assignmentList=>assignmentList.course_id===newCourse); 
    };

    const filteredAssignments = filterByCourse(course);


    return(
        <>
                <h1>{props.courseValueSelected}</h1>
                <ul className="AssignmentsList1">
                    {categories.map((category) => (  //for all categories in categories array, category = cat[i]

                        <li className='category-list' key ={category}>
                            <h2>{category}</h2>    
                            <CategorizedAssignmentsList cat={category} assList = {filteredAssignments}></CategorizedAssignmentsList>  {/*creates a categorized assignmment list*/} 
                        
                        </li>

                    ))}
                </ul>
                
        </>
    )
}
export default CourseAssignmentsList


                        /*<ul> //uncomment when you get program to actually work
                            {assignments.map((assignment) => (
                                if(category === assignment.category){
                                    <li key = {assignment.id}> 
                                        <h2>{assigment.title}</h2>
                                        <p>{assigment.due_date}</p>
                                    </li>
                                }
                                //for all assignments in category, add info to list ->
                                //<AssignmentListItem thisCat = {catgory} assignments = {assignments}></AssignmentListItem>
                            ));
                            }
                            
                            </ul>*/


/**********extra notes**********************************
 *               //tried to do it with useState
 * 
 *               //const [cat, setCat] = useState("Assignments"); 
                //setCat("Assignments"); 

                /*const filterByCat = (cat) =>{
                    return assignments.filter(assignments=>assignments.category==cat); 
                };*/

                //const filteredAssignments = filterByCat(cat); 
                //const [filteredAssignments, setFilteredAssignments] = useState(assignments);


 //               ----->return()
  
                    {/*categories.map((category) => (  //for all categories in key
                        
                        <div className='category-list' key ={category}>
                            <h1>{category}</h1>    
                            
                            
                            {/*this should be a separate component*/}
                            {/*setFilteredAssignments(filterByCat(category))}

                            {filteredAssignments.map((assignmentItem) => (
                                <div className = 'assItem' key = {assignmentItem.id}>
                                    <h2>{assignmentItem.title}</h2>
                                </div>
                            ))}

                        </div>

                    ))*/}
 
import {assignments, categories, courses} from './mockAssignmentsData';
import AssignmentsListItem from './AssignmentsListItem.jsx';


/*Makes a categorized list of assignments for a class: CourseAssignmentList 
    //should be sorted by most recent date 
    //new assignments should be added when they are created in canvas, but thats true for the whole program 
*/

const AssignmentsList2Try = (props) => {    //could do: {courseValueSelected}
    //list with header and cards

    const course = props.courseValueSelected; 

    //filters assignments by course --> might have to change for db call (maybe use inmap filter)
    const filterByCourse = (newCourse) =>{
        if(newCourse == 'All'){
            return assignments; 
        }
        return assignments.filter(assignments=>assignments.course===newCourse); 
    };

    const filteredAssignments = filterByCourse(course);


    return(
        <>
            <div className="AssignmentsList">
                <h1>COURSE: {props.courseValueSelected}</h1>

                {categories.map((category) => (  //for all categories in categories array, category = cat[i]

                    <div className='category-list' key ={category}>
                        <h1>{category}</h1>    
                        <AssignmentsListItem cat={category} assList = {filteredAssignments}></AssignmentsListItem>  {/*creates a categorized assignmment list*/} 
                    
                    </div>

                ))}

            </div>
        </>
    )
}
export default AssignmentsList2Try


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
 
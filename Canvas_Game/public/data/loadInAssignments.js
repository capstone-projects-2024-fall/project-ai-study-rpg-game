function loadInAssignments(){
    const email = localStorage.getItem('email')
    fetch("http://127.0.0.1:5000/assignmentFromDb?email="+email)
    .then(response=>{
        if (response.ok){
          return response.json();
        }else{
          throw new Error("Api call failed")
        }
      })
      .then(data=>{
        const container = $("#assignmentsList")
        let assignmentList = $("<table><tr><th>Assignment Name</th><th>Due Date</th><th></th><th>Begin</th></tr></table>").prop('id', 'assignmentTable')
        for(let assignment of data.assignments){
            if(assignment.in_game_status == "Undecided" || assignment.in_game_statue == "To Do"){
                const btn = $("<button type='button'>Start Assignment</button>").on('click', function(){
                    const data = {
                        taskId: assignment.id,
                        status: "In Progress"
                      }
                      const requestOptions = {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data)
                      }
                      fetch("http://127.0.0.1:5000/api/updateTaskStatus", requestOptions)
                        .then(response=>{
                          if(!response.ok){
                            throw new Error('Bad Response');
                          }
                          return response.json();
                        })
                        .then(data=>{
                          $("#dialogueText").html("Congratulations, you started the assignment! Thank you, this will be a great help to our village!")
                          btn.html('Started')
                          btn.prop("disabled", true)
                        })
                        .catch(error=>{
                          console.log(error)
                        })
                })
                let assignmentLineItem = $("<tr><td>"+ assignment.assignment_name + "</td><td>"+ assignment.due_at +"</td><td id='button'></td></tr>").prop('id', assignment.id)
                $(assignmentLineItem).children()[2].append(btn[0])
                $(assignmentList).append(assignmentLineItem)
            }
        }
        $(container).append(assignmentList)
      })
      
}

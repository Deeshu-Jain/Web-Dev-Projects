// Function To Add New Student
function addNew(nameStudent,studentsList){
    studentsList.push(nameStudent);
    alert(nameStudent+" added successfully.");
}

// Function To Remove A Student
function remove(nameStudent,studentsList){
    var index = studentsList.indexOf(nameStudent);
    studentsList.splice(index,1)
    alert(nameStudent+" removed successfully.");
    return studentsList
}

var roster = [];
var student;
var condition = true;

while(condition){
    var choice = prompt("Enter your Choice Number: \n1: Add\n2: Remove\n3: Display\n4: Quit");
    if (choice==1){
        student = prompt("Enter Name of The Student You Want to Add");
        addNew(student,roster);
    }
    else if(choice==2){
        student = prompt("Enter Name of The Student You Want to Remove");
        roster=remove(student,roster)
    }
    else if(choice==3){
       alert("List of Students Displayed in the Console.");
       console.log(roster);
    }
    else if(choice==4){
        condition=false;
    }
}
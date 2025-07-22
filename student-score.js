const student = [];

function addstudent(name, score){
    score = Number(score);
    score = score ?? 0;
    name = name.trim().toUpperCase();

    student.push({name, score});

} 

//finding grades... 

function getGrades(){
    return student.map((student) => {
        let grade = 'F';

        if(student.score >= 90) grade = 'A';
        else if(student.score >= 75) grade = 'B';
        else if(student.score >= 50) grade = 'C';
        else if(student.score >= 35) grade = 'D';

        return {...student, grade };
    });
}

// top scores
function topScores(){
    return student.filter((student) => student.score >= 75);
}

//To find specific data
function findStudent(name){
    return student.find((student) => student.name == name);
}

//check Failures
function hasFailures(){
    return student.some((student) => student.score < 35);
}

//display data
function displayAll(){
    const graded = getGrades();
    console.log("Student data");
    console.log("All student with grades");
    console.log("Name | Score | Grade")
    graded.forEach((student) => {
        console.log(`${student.name} | ${student.score} | ${student.grade}`);
    })
}

// Add students
addstudent("Mosees","91");
addstudent("Ravi","82");
addstudent("sneha","44");
addstudent("Aarthi","29");

//display students data
displayAll();

//  Top scores
console.log("\n Top Scores: ");
console.log(topScores());

// Find student
console.log("\n Searching for Ravi : ");
console.log(findStudent("RAVI"));

//Any Failures
console.log("\nAny Failures");
console.log(hasFailures() ? "Yes few Students failed" : "No failures");
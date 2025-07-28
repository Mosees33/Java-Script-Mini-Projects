
//employee constructor
function Employee(id, name, dept, salary){
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.salary = salary;
}

//employee database
const EmployeeDB = {};

//add values to the database
function addEmployee(id, name, dept, salary){
    const employee = new Employee(id, name, dept, salary);
    EmployeeDB[id] = employee;
    console.log("Employee with ID "+id+" added to the database");
}

//get the values of the employees
function getAllEmployees(){
    const employees = Object.values(EmployeeDB);
    console.log("List of All employees");
    employees.forEach((employee) =>{
        console.log(`Name: ${employee.name}, Dept : ${employee.dept}, Salary : ${employee.salary}`);
    });
}

//get specific employee
function getEmployee(id){
    if(EmployeeDB[id]){
        return Object.entries(EmployeeDB[id]);
    }
    return `employee with id ${id} not found`;
}

//function to update employee details
function updateEmployee(id, updatedDetails){
    if(EmployeeDB[id]){
        Object.assign(EmployeeDB[id], updatedDetails);
    }else{
        return `employee with id ${id} not found`;
    }
}

//function to freeze employee data
function freezeeEmployee(id){
     if(EmployeeDB[id]){
        Object.freeze(EmployeeDB[id])
        console.log("Employee data freezed");
    }else{
        return `employee with id ${id} not found`;
    }
}

//function to seal employee data
function sealEmployee(id){
     if(EmployeeDB[id]){
        Object.seal(EmployeeDB[id])
        console.log("Employee data sealed");
    }else{
        return `employee with id ${id} not found`;
    }
}

//usage

addEmployee(1, "Alice", "Engineering", 70000);
addEmployee(2, "Bob", "Marketing", 50000);
addEmployee(1, "Charlie", "HR", 60000);

//view employee
console.log("\n");
getAllEmployees();

//get employee details with id
console.log("\n");
console.log("View Employee Details");
console.log(getEmployee(2));

//update employee
console.log("\n");
console.log("update Employee Details");
updateEmployee(2, {salary:55000})
console.log("After update");
getAllEmployees();

// freeze employee
console.log("\n");
console.log("Freezing Employee Details");
freezeeEmployee(2);
console.log("employee data freezed");

//Attempt to modify frozen data
EmployeeDB[2].salary = 60000;
console.log("After freeze");
getAllEmployees();

//seal employee data
console.log("\n");
console.log("sealing Employee Details");
sealEmployee(2);
EmployeeDB[1].salary = 80000;
console.log("After seal");
console.log(getEmployee(1));


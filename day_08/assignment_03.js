let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];
// 1. declare array of employees & sort them in ascending order (empId)
let Idsort = [...employees].sort((a, b) => a.eId - b.eId);
console.log("Sorted by eId:", Idsort);

// 2. declare array of employees & sort them in ascending order by name.
let nameSort = [...employees].sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log("Sorted by name:", nameSort);

// 3. declare array of employees & filter the employees whose sal>6000;
let empSal = employees.filter(emp => emp.sal > 6000);
console.log("Salary > 6000:", empSal);

// 4. declare array of employees & increase sal of every employee by 500;
let inc = employees.map(emp => ({ ...emp, sal: emp.sal + 500 }));
console.log("Increased salary:", inc);

// 5. declare array of employees & add "comp:ibm" to every employee;
let ibm = employees.map(emp => ({ ...emp, comp: 'ibm' }));
console.log("company ibm :", withCompany);
// 6. convert array of letters to array of words
    const inputArr = [ 
            'b', 'a', 'k', 'e', '',
            'c', 'a', 'k', 'e', '',
            'e', 'a', 't'
            ];
    words=[];
    word=''
    for(i=0;i<=inputArr.length;i++){
        if(inputArr[i] !==''){
            word+=inputArr[i]
        }else{
            words.push(word)
            word=''
        }
    }
    console.log(words);

// 	   output = ['bake','cake','eat'];

// 7. add Dept info for each employee
    employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
	departments = [{ eId: 101, dept: "sales" },
				{ eId: 104, dept: "marketing" }]
// Merge based on eId
    emp_with_dept= employees.map(emp => {
    let deptInfo = departments.find(dept => dept.eId === emp.eId);
    return {
        ...emp,
        dept: deptInfo ? deptInfo.dept : "Unknown"
    };
    });

    console.log(emp_with_dept);

// 8. declare array of employees & groupBy employees-name
//     sample output: {
// 		'sanjay' : [{},{}],
// 		'alok' : [{}]
// 	}
    let employeesList = [
    { name: "sanjay", sal: 5000 },
    { name: "alok", sal: 6000 },
    { name: "sanjay", sal: 7000 }
    ];
    let grouped = {};
    for (let emp of employeesList) {
        if (!grouped[emp.name]) {
            grouped[emp.name] = [];
        }
        grouped[emp.name].push(emp);
    }

    console.log(grouped);

// 9. intersection of 2 number arrays
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [2, 4, 6, 8, 10];
let arr3 = [];
for(let i=0;i<arr1.length;i++){
    if(arr3.includes(arr1[i])){

    }else{
        arr3.push(arr1[i])
    }
}
for(let j=0;j<arr2.length;j++){
    if(arr3.includes(arr2[j])){

    }else{
        arr3.push(arr2[j])
    }
}
console.log(arr3)

// 10. WAP to print the occurance of each elements 
//     input = [10,20,30,40,50,10,30,50]
// 	output = {10:2, 20:1, 30:2 , 40:1, 50:2}
a=[10,20,30,40,50,10,30,50];
b={}
for (i of a){
    if(i in b){
        b[i]=b[i]+1
    }
    else{
        b[i]=1
    }
};
console.log(a);
console.log(b);
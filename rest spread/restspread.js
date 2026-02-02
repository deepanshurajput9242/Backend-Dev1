//rest spread operator
const emp={
    id:1,
    name:"yash",
    salary:50000,
    address:"delhi",
    age:25,
    department:"IT"
};

// is object ko doosre obj me copy karna hai spread operator se
const emp2={...emp};//spread operator
const {id,name,salary,...otherInfo}=emp; //rest operator
console.log(otherInfo);
console.log(emp2);

//updating address field using spread operator
const emp3={...emp,address:"mumbai"};
console.log(emp3);
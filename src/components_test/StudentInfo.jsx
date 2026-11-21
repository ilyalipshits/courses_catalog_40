import {useState} from 'react';

function StudentInfo(){
    const [student, setStudent] = useState({
        name: "Anna",
        age: 32,
        group: "React Basics"
    });

    // function increaseAge(){ //error
    //     student.age += 1;
    //     setStudent(student);
    // }

    function increaseAge(){
        setStudent((prevStudent)=>({
            ...prevStudent, age: prevStudent.age + 1
        }))
    }

    function changeName(){
        setStudent((prevStudent)=>({
            ...prevStudent,name:"Vasya"
            })
        );
    }

    function changeGroup(){
        setStudent((prevStudent)=>({
            ...prevStudent,group: "Python"
            })
        );
    }

    return (
        <div>
            <h2>{student.name}</h2>
            <p> age: {student.age}</p>
            <p>Group: {student.group}</p>
            <button onClick={increaseAge}>Increase Age</button>
            <button onClick={changeName}>change Name</button>
            <button onClick={changeGroup}>changeGroup</button>
        </div>
    )
}
export default StudentInfo;
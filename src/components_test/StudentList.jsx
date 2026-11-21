import {useState} from 'react';

function StudentList(){
    const [students, setStudents] = useState([
        {
            id: 1,
            name: 'Anna',
            "isActive": false,
        },
        {
            id: 2,
            name: 'David',
            "isActive": true,
        }
    ]);

    function addStudent(){
        const newStudent = {
            id: crypto.randomUUID(),
            // id: students.length + 1,
            name: 'Sarah',
            isActive: true,
        }
        setStudents((prevStudents)=>
            [...students, newStudent]);
    }

    function deleteStudent(id){
        setStudents((pS)=>
        pS.filter((student) =>
            student.id !== id)
        );
    }

    function toggleStudentStatus(id) {

        setStudents((previousStudents) =>
            previousStudents.map((student) => {

                if (student.id === id) {

                    return {
                        ...student,
                        isActive: !student.isActive
                    };
                }

                return student;
            })
        );

    }


    return (
        <div>
            {students.map((student) => (<div key={student.id}>
                <p  >{student.name}  </p>
                <p key={student.id}>{
                    student.isActive ? "Active" : "NOT Active" }</p>
        </div>
))}
            <button onClick={addStudent}> AddStudent   </button>
            <button onClick={()=>deleteStudent(1)} type="button"> deleteStudent   </button>
            <button onClick={()=>toggleStudentStatus(2)} type="button"> toggleStudent   </button>

        </div>
    )
}

export default StudentList;
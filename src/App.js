import FormComponent from './components/Form'
import TableComponent from './components/Table'
import { useState } from 'react';

function App() {
  // Tạo state lưu mảng sv
    const [listStudent, setListStudent] = useState([]);

    // Hàm thêm sinh viên
    const addStudent = (st) => {
      const tmpStudent = [...listStudent, st];
      setListStudent(tmpStudent);
    }

    // Hàm xóa sinh viên
    const removeStudent = (stParam) => {
      const tmpStudent = [...listStudent];
      const stIndex = tmpStudent.indexOf(stParam);
      if (stIndex !== -1) {
        tmpStudent.splice(stIndex, 1);
        setListStudent(tmpStudent);
      }
    }
    console.log(listStudent);
    return (
    <div className="App" style={{height: "100vh", padding: 100, backgroundImage:`url("https://img.freepik.com/premium-vector/sky-background-video-conferencing_23-2148616500.jpg?w=1380")`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <FormComponent addStudent={(st) => addStudent(st)}/>
      <TableComponent listStudent={listStudent} removeStudent={(st) => removeStudent(st)}/>
    </div>
  );
}

export default App;

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import "../css/table.css";
import { useState } from 'react';

function TableComponent({ listStudent, removeStudent }) {
	const [bold, setBold] = useState(false);

	//Nút in đậm
	const handleMark = () => {
		setBold(!bold);
	};

	return (
		<div className="table-layout">
			<Button variant="secondary" className="btn-mark" onClick={handleMark}>
				Đánh dấu sinh viên trên 5 điểm
			</Button>

			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>Họ và tên đệm</th>
						<th>Tên</th>
						<th>Điểm</th>
						<th>Chức năng</th>
					</tr>
				</thead>
				<tbody>
					{listStudent.map((st) => {
						let check = (bold === true && st.score > 5) ? "text-bold" : "";
						return (
							<tr key={st.ID}>
								<td className={check}>{st.firstName}</td>
								<td className={check}>{st.lastName}</td>
								<td>{st.score}</td>
								<td>
									<Button variant="danger" onClick={() => removeStudent(st)}>Xóa</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
}

export default TableComponent;

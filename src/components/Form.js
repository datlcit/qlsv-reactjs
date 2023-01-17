import uuid from "react-uuid";

import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

import "bootstrap/dist/css/bootstrap.css";
import "../css/form.css";

import { useState } from "react";

function FormComponent({ addStudent }) {
	const [info, setInfo] = useState({
		ID: uuid(),
		firstName: "",
		lastName: "",
		score: 0,
	});

	const listeningBtnAdd = () => {
		addStudent(info);
		setInfo({ ID: uuid(), firstName: "", lastName: "", score: 0 });
	}

	const changeStudent = (key, value) => {
		const tmpStudent = {...info};
		tmpStudent[key] = value;
		setInfo(tmpStudent);
	}

	return (
		<Form>
			<Form.Group className="form-layout mb-3">
				<div className="form-input-layout">
					<Form.Label>Họ và tên đệm:</Form.Label> <br />
					<Form.Control
						type="text"
						onChange={(e) => changeStudent("firstName", e.target.value)}
					/>{" "}
					<br />
				</div>
				<div className="form-input-layout">
					<Form.Label>Tên:</Form.Label> <br />
					<Form.Control
						type="text"
						onChange={(e) => changeStudent("lastName", e.target.value)}
					/>{" "}
					<br />
				</div>
				<div className="form-input-layout">
					<Form.Label>Điểm:</Form.Label> <br />
					<Form.Control
						type="number"
						onChange={(e) => changeStudent("score", e.target.value)}
					/>{" "}
					<br />
				</div>
				<Button variant="success" type="reset" className="btn-add-student" onClick={() => listeningBtnAdd()}>
					Thêm
				</Button>
			</Form.Group>
		</Form>
	);
}

export default FormComponent;

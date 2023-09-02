import { NavLink, useParams } from "react-router-dom";

import BackButton from "../../UI/Button/BackButton";
import StyledListHead from "../../UI/List/ListHead";
import StyledListElement from "../../UI/List/ListElement";

import { ClipLoader } from "react-spinners";
import { styled } from "styled-components";
import img from "../../../public/default.jpg";

import { useQuery } from "@tanstack/react-query";
import { getOne } from "../../services/requestHelpers";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button/Button";
import StudentForm from "../../UI/form/StudentForm";
import ChoseHomework from "../homework/ChoseHomework";
import useClass from "../../hooks/useClass";

const StyledHeader = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  margin: 1.2rem 0;

  color: red;
  font-weight: bold;

  font-size: 1.2rem;
`;

function ClassDetail() {
  const { classId } = useParams();

  const { data, isLoading } = useClass({ classId });

  if (isLoading)
    return <ClipLoader loading={isLoading} color="#fff" size={500} />;

  const { className, students, capacity, teacher, classID } = data.data.doc;

  return (
    <>
      <BackButton />
      <StyledHeader>
        <li>Class Name : {className}</li>
        <li>Number of students: {students.length}</li>
        <li>Capacity : {capacity}</li>
      </StyledHeader>

      <>
        <h2>Teacher</h2>
        <StyledListHead variation="teacher">
          <div>Teacher Avatar</div>
          <div>Teacher Name</div>
          <Modal>
            <Modal.Open opens="choose-homework">
              <Button>Give Homework</Button>
            </Modal.Open>
            <Modal.Window variation="medium" name="choose-homework">
              <ChoseHomework
                teacherId={teacher._id}
                classId={classID}
                students={students}
              />
            </Modal.Window>
          </Modal>
        </StyledListHead>
        <StyledListElement variation="teacher">
          <img src={img} />
          <div>{teacher.name}</div>
          <NavLink to={`/teachers/${teacher._id}`}>See details</NavLink>
        </StyledListElement>
      </>

      <>
        <h2>Students</h2>
        <StyledListHead variation="class">
          <div>Students Avatar</div>
          <div>Student Name</div>
          <Modal>
            <Modal.Open>
              <Button>Add student to class</Button>
            </Modal.Open>
            <Modal.Window>
              <StudentForm teacherId={teacher._id} classId={classID} />
            </Modal.Window>
          </Modal>
        </StyledListHead>
        {students.map((student) => {
          return (
            <StyledListElement variation="student" key={student._id}>
              <img src={img} />
              <div>{student.name}</div>
              <NavLink to={`/students/${student._id}`}>See details</NavLink>
            </StyledListElement>
          );
        })}
      </>
    </>
  );
}

export default ClassDetail;

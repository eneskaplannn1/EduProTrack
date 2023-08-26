import { NavLink, useParams } from "react-router-dom";

import BackButton from "../../UI/Button/BackButton";
import StyledListHead from "../../UI/List/ListHead";
import StyledListElement from "../../UI/List/ListElement";

import { ClipLoader } from "react-spinners";
import { styled } from "styled-components";
import img from "../../../public/default.jpg";

import { useQuery } from "@tanstack/react-query";
import { getOne } from "../../services/requestHelpers";

const StyledClassDetail = styled.div`
  h1 {
  }
  .teacher {
    color: #eab34d;
  }
  .student {
    color: yellow;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem;
    margin: 1.2rem 0;

    color: red;
    font-weight: bold;

    font-size: 1.5rem;
  }
`;

function ClassDetail() {
  const { classId } = useParams();
  console.log(classId);

  const { data, isLoading } = useQuery({
    queryFn: () => getOne("classes", classId),
    queryKey: ["class", classId],
  });

  if (isLoading)
    return <ClipLoader loading={isLoading} color="#fff" size={500} />;

  const { className, students, capacity, teacher } = data.data.doc;
  console.log(students, teacher);
  return (
    <StyledClassDetail>
      <BackButton />
      <div className="header">
        <div>Class Name : {className}</div>
        <div>Capacity : {capacity}</div>
      </div>
      <h2 className="teacher">Teacher</h2>
      <StyledListHead>
        <div>Teacher Avatar</div>
        <div>Teacher Name</div>
      </StyledListHead>
      <StyledListElement>
        <img src={img} />
        <div>{teacher.name}</div>
        <NavLink to={`/teachers/${teacher._id}`}>See details</NavLink>
      </StyledListElement>

      <h2 className="student">Students</h2>
      <StyledListHead>
        <div>Students Avatar</div>
        <div>Student Name</div>
      </StyledListHead>
      {students.map((student) => {
        return (
          <StyledListElement key={student._id}>
            <img src={img} />
            <div>{student.name}</div>
            <NavLink to={`/students/${student._id}`}>See details</NavLink>
          </StyledListElement>
        );
      })}
    </StyledClassDetail>
  );
}

export default ClassDetail;

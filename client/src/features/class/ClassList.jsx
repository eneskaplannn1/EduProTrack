import { styled } from "styled-components";
import Button from "../../UI/Button/Button";

import { useQuery } from "@tanstack/react-query";
import { getAll } from "../../services/requestHelpers";
import { ClipLoader } from "react-spinners";
import { NavLink } from "react-router-dom";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
  margin-top: 1.8rem;

  gap: 2rem;
`;
const StyledClass = styled.div`
  background-color: #28334d;
  border-radius: 1rem;
  padding: 1rem 0.2rem;
  width: 300px;
  height: 300px;
  justify-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;

  h3 {
    text-align: center;
    color: #ff05d5;
  }
`;

function ClassList() {
  const { data, isLoading } = useQuery({
    queryFn: () => getAll("classes"),
    queryKey: ["class"],
  });

  if (isLoading)
    return <ClipLoader loading={isLoading} color="#fff" size={500} />;

  return (
    <StyledContainer>
      {data.data.doc.map((classroom) => (
        <StyledClass key={classroom._id}>
          <h3>{classroom.className}</h3>
          <div>Capacity: {classroom.capacity}</div>
          <div>Total Students: {classroom.students.length}</div>
          <NavLink to={`/classes/${classroom._id}`}>
            <Button>See Detail</Button>
          </NavLink>
        </StyledClass>
      ))}
    </StyledContainer>
  );
}

export default ClassList;

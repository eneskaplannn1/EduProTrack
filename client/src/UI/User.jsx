import { styled } from "styled-components";
import { useAuth } from "../context/AuthProvider";

const StyledUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  img {
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
  }
`;

function User() {
  const { user } = useAuth();
  return (
    <StyledUser>
      <img src={`/users/${user.photo}`} />
      <p>{user.name}</p>
    </StyledUser>
  );
}

export default User;

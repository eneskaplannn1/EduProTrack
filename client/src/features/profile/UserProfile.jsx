import img1 from "../Screenshot_6.png";

import Button from "../../UI/Button/Button";
import { NavLink } from "react-router-dom";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import { DetailImage, DetailInfo } from "../../UI/Detail";
import { useAuth } from "../../context/AuthProvider";

function UserProfile() {
  const { user } = useAuth();
  return (
    <>
      <DetailImage>
        <img src={img1} />
      </DetailImage>
      <DetailInfo>
        <div>FullName : {user.name}</div>
        <div>Email : {user.email}</div>
        <div>Phone : +80 487612374</div>
        <div>Address : Some dummy address</div>
        <div>Gender : Male</div>
        <div>Age : 19</div>
        <div>Admission Date : 13.09.2022</div>
        <div>Class : 12/B</div>
      </DetailInfo>
      <ButtonContainer>
        <NavLink to="/account">
          <Button type="small" variation="update">
            Update Account
          </Button>
        </NavLink>
      </ButtonContainer>
    </>
  );
}

export default UserProfile;

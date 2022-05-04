import { DrawerButton, DrawerContainer } from "./style";
import { useHistory } from "react-router";
import { useAuthentication } from "../../Providers/Authentication";
import { useState } from "react";
import ModalComponent from "../Modal";
import UpdateUser from "../updateUser";

const DrawerMenu = ({ user, setUser }) => {
  const history = useHistory();
  const { setAuthenticated } = useAuthentication();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/");
  };

  return (
    <DrawerContainer>
      <img src="https://i.pravatar.cc/120" alt="avatar" />
      <h4 className="userTitle">Olá, {user}</h4>
      <DrawerButton onClick={() => history.push("/dashboardMain")}>
        Início
      </DrawerButton>
      <DrawerButton onClick={() => history.push("/dashboardHabits")}>
        Meus hábitos
      </DrawerButton>
      <DrawerButton onClick={() => history.push("/dashboardGroups")}>
        Meus grupos
      </DrawerButton>
      <DrawerButton onClick={handleOpen}>Configurações</DrawerButton>
      <ModalComponent openModal={open} setOpenModal={setOpen}>
        <UpdateUser setOpenModal={setOpen} setUser={setUser} />
      </ModalComponent>
      <DrawerButton onClick={handleLogout}>Logout</DrawerButton>
    </DrawerContainer>
  );
};

export default DrawerMenu;

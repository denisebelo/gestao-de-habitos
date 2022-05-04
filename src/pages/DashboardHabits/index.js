import Header from "../../components/Header";
import { DashboardContainer } from "../../styles/mainContainers";
import SideMenu from "../../components/SideMenu";
import { DashboardMainBox } from "../DashboardMain/style";
import Footer from "../../components/Footer";
import { useHabits } from "../../Providers/habits";
import HabitCard from "../../components/HabitCard";
import { Drawer } from "@material-ui/core";
import DrawerMenu from "../../components/DrawerMenu";
import { useState, useEffect } from "react";
import HabitCreator from "../../components/HabitCreator";
import { Redirect } from "react-router-dom";
import { useAuthentication } from "../../Providers/Authentication";
import { HabitsBox } from "./style";
import ModalContainer from "../../components/Modal";
import { GrAdd } from "react-icons/gr";
import ModalComponent from "../../components/Modal";
import api from "../../services/api";
import jwtDecode from "jwt-decode";

const DashboardHabits = () => {
  const { habitsList, getHabits } = useHabits();
  const [showDrawer, setShowDrawer] = useState(false);
  const { authenticated } = useAuthentication();
  const [openModalCreator, setOpenModalCreator] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const tk = JSON.parse(localStorage.getItem("@gestaohabitosg5:token"));
    getHabits(tk);
    const decoded = jwtDecode(tk);

    api
      .get(`/users/${decoded.user_id}/`)
      .then((res) => {
        setUser(res.data.username);
      })
      .catch((e) => console.log(e));
  }, [user]);

  const handleOpenHabitsCreator = () => {
    setOpenModalCreator(true);
  };

  const setMotivation = () => {
    if (habitsList.length <= 3) {
      return (
        <div className="motivationMessage">
          Crie novos hábitos e otimize sua rotina!
        </div>
      );
    } else if (habitsList.length <= 7 && habitsList.length > 3) {
      return (
        <div className="motivationMessage">
          Você está no caminho certo! Tente manter a disciplina!
        </div>
      );
    } else if (habitsList.length > 7) {
      return (
        <div className="motivationMessage">
          Muitos hábitos novos... Melhor priorizar alguns pra não ficar
          sobrecarregado!
        </div>
      );
    }
  };

  if (authenticated === false) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Drawer
        anchor="left"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
      >
        <DrawerMenu user={user} setUser={setUser} />
      </Drawer>
      <Header setShowDrawer={setShowDrawer} />
      <DashboardContainer>
        <SideMenu user={user} setUser={setUser} />
        <DashboardMainBox>
          <HabitsBox>
            <h1 className="DashboardTitle">meus hábitos</h1>
            {habitsList.map((habit, index) => {
              return <HabitCard key={index} habit={habit} />;
            })}
            <div className="habitsButton" onClick={handleOpenHabitsCreator}>
              <GrAdd />
            </div>
            <div className="habitsExplorer">
              <h1 className="DashboardTitle">mais informações</h1>
              <p className="habitsCounter">
                Você possui {habitsList.length} hábito(s)!
              </p>
              {setMotivation()}
            </div>
          </HabitsBox>
          <ModalComponent
            openModal={openModalCreator}
            setOpenModal={setOpenModalCreator}
          >
            <HabitCreator setOpenModal={setOpenModalCreator} />
          </ModalComponent>
        </DashboardMainBox>
      </DashboardContainer>
      <Footer />
    </>
  );
};

export default DashboardHabits;

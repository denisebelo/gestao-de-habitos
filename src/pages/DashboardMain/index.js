import SideMenu from "../../components/SideMenu";
import Header from "../../components/Header";
import { DashboardContainer } from "../../styles/mainContainers";
import { DashboardMainBox } from "./style";
import Footer from "../../components/Footer";
import { useHabits } from "../../Providers/habits";
import { useEffect, useState, useContext } from "react";
import { Drawer, Link } from "@material-ui/core";
import DrawerMenu from "../../components/DrawerMenu";
import { GroupsContext } from "../../Providers/groups";
import { Redirect } from "react-router-dom";
import { useAuthentication } from "../../Providers/Authentication";
import { BsCheck } from "react-icons/bs";
import api from "../../services/api";
import jwtDecode from "jwt-decode";

const DashboardMain = () => {
  const { habitsList, removeHabit, getHabits } = useHabits();
  const { groupsList, getGroups } = useContext(GroupsContext);
  const [showDrawer, setShowDrawer] = useState(false);
  const { authenticated } = useAuthentication();
  const [user, setUser] = useState("");

  useEffect(() => {
    const tk = JSON.parse(localStorage.getItem("@gestaohabitosg5:token"));
    getGroups(tk);
    getHabits(tk);
    const decoded = jwtDecode(tk);

    api
      .get(`/users/${decoded.user_id}/`)
      .then((res) => {
        setUser(res.data.username);
      })
      .catch((e) => console.log(e));
  }, [user]);

  if (!authenticated) {
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
          <div className="mainHabits">
            <h1 className="DashboardTitle">meus hábitos</h1>
            {habitsList < 1 ? (
              <h3 className="noHabitsMessage">
                Você não possui hábitos cadastrados. Vá para a seção de hábitos
                e adicione quantos quiser!
              </h3>
            ) : (
              habitsList.map((habits, index) => {
                return (
                  <div className="habitsMinicard" key={index}>
                    <h1>{habits.title}</h1>
                    <button onClick={() => removeHabit(habits.id)}>
                      remover hábito
                    </button>
                  </div>
                );
              })
            )}
          </div>
          <div className="mainGroups">
            <h1 className="DashboardTitle">meus grupos</h1>
            {groupsList < 1 ? (
              <h3 className="noHabitsMessage">
                Você não está inscrito em nenhum grupo. Vá para a seção de
                grupos para inscrever-se ou criar seu grupo!
              </h3>
            ) : (
              groupsList.map((group, index) => {
                return (
                  <div className="groupsMinicard" key={index}>
                    <h1>{group.name}</h1>
                    <h3>Categoria: {group.category}</h3>
                  </div>
                );
              })
            )}
          </div>
        </DashboardMainBox>
      </DashboardContainer>
      <Footer />
    </>
  );
};

export default DashboardMain;

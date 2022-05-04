import Header from "../../components/Header";
import { DashboardContainer } from "../../styles/mainContainers";
import SideMenu from "../../components/SideMenu";
import { DashboardMainBox } from "../DashboardMain/style";
import Footer from "../../components/Footer";
import { useState } from "react";
import { Drawer } from "@material-ui/core";
import DrawerMenu from "../../components/DrawerMenu";
import ModalComponent from "../../components/Modal";
import GroupCreatorPopup from "../../components/GroupCreator";
import GroupCard from "../../components/GroupCard";
import { useContext, useEffect } from "react";
import { GroupsContext } from "../../Providers/groups";
import { Redirect } from "react-router-dom";
import { useAuthentication } from "../../Providers/Authentication";
import { GroupsBox } from "./style";
import SubscribeGroup from "../../components/SubscribeGroup";
import { GrAdd } from "react-icons/gr";
import api from "../../services/api";
import jwtDecode from "jwt-decode";

const DashboardGroups = () => {
  const [openModalCreator, setOpenModalCreator] = useState(false);
  const [openModalSubscribe, setOpenModalSubscribe] = useState(false);
  const { groupsList, getGroups } = useContext(GroupsContext);
  const [showDrawer, setShowDrawer] = useState(false);
  const { authenticated } = useAuthentication();
  const [user, setUser] = useState("");

  useEffect(() => {
    const tk = JSON.parse(localStorage.getItem("@gestaohabitosg5:token"));
    getGroups(tk);
    const decoded = jwtDecode(tk);

    api
      .get(`/users/${decoded.user_id}/`)
      .then((res) => {
        setUser(res.data.username);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleOpenCreator = () => {
    setOpenModalCreator(true);
  };

  const handleOpenSubscribe = () => {
    setOpenModalSubscribe(true);
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
          <GroupsBox>
            <h1 className="DashboardTitle">meus grupos</h1>
            {groupsList.map((group, index) => (
              <GroupCard key={index} group={group} />
            ))}
            <div className="groupsButton" onClick={handleOpenCreator}>
              <GrAdd />
            </div>

            <div className="GroupExplorer">
              <h1 className="DashboardTitle">explorar grupos</h1>
              <button className="searchButton" onClick={handleOpenSubscribe}>
                {" "}
                Procurar grupos{" "}
              </button>
            </div>
            <ModalComponent
              openModal={openModalCreator}
              setOpenModal={setOpenModalCreator}
            >
              <GroupCreatorPopup setOpenModalCreator={setOpenModalCreator} />
            </ModalComponent>
          </GroupsBox>
          <ModalComponent
            openModal={openModalSubscribe}
            setOpenModal={setOpenModalSubscribe}
          >
            <SubscribeGroup />
          </ModalComponent>
        </DashboardMainBox>
      </DashboardContainer>
      <Footer />
    </>
  );
};

export default DashboardGroups;

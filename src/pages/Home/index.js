import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { InitialContainer } from "../../styles/mainContainers";
import { MainButton } from "../../styles/mainContainers";
import { Background, Breaker } from "./style";
import { useHistory, Redirect } from "react-router-dom";
import { useAuthentication } from "../../Providers/Authentication";

const Home = () => {
  const history = useHistory();
  const { authenticated } = useAuthentication();

  if (authenticated) {
    return <Redirect to='/dashboardMain' />
  }

  return (
    <>
      <Header />
      <InitialContainer>
        <Background/>
        <Breaker>
          <div className="title">
            Transforme sua rotina com <span className="trademark">goodhabits</span>™
          </div>
          <div className="subtitle">
            A plataforma que faltava para enumerar e manter seus hábitos,
            criar e participar de grupos onde os membros compartilham atividades
            e definem metas.
          </div>
          <div>
            <button className="startButton" onClick={() => history.push("/signup")}>
              Começar
            </button>
          </div>
        </Breaker>
      </InitialContainer>
      <Footer />
    </>
  );
};

export default Home;

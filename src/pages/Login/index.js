import Header from "../../components/Header";
import { InitialContainer } from "../../styles/mainContainers";
import Footer from "../../components/Footer";
import { Link, Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import { AnimationContainer, Background, Content } from "./styles";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { useAuthentication } from "../../Providers/Authentication";
import { useEffect } from "react";
import { useToken } from "../../Providers/token";
import { useUser } from "../../Providers/user";

const Login = () => {
  const { authenticated, setAuthenticated } = useAuthentication();
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 caracateres")
      .required("Campo obrigatório"),
  });
  const { token } = useToken();
  const { userName } = useUser();
  const { coisar } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmitLogin = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        localStorage.clear();
        const { access } = response.data;

        localStorage.setItem("@gestaohabitosg5:token", JSON.stringify(access));
        coisar();
        setAuthenticated(true);
      })
      .then((res) => {
        history.push("/DashboardMain");
      })
      .catch((err) => {
        toast.error("Usuário ou senha inválidos")
      }
      );
  };

  if (authenticated) {
    return <Redirect to="/dashboardMain" />;
  }

  return (
    <>
      <Header />
      <InitialContainer>
        <Background />
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
              <h1>login</h1>
              <TextField
                variant="outlined"
                margin="dense"
                size="small"
                placeholder="Nome de usuário"
                {...register("username")}
                helperText={errors.username?.message}
              />
              <TextField
                variant="outlined"
                margin="dense"
                placeholder="Senha"
                size="small"
                type="password"
                {...register("password")}
                helperText={errors.password?.message}
              />

              <button type="submit">Entrar</button>
              <h2>
                Não possui conta? <Link to="/signUp">Crie a sua!</Link>
              </h2>
            </form>
          </AnimationContainer>
        </Content>
      </InitialContainer>
      <Footer />
    </>
  );
};

export default Login;

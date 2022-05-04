import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory, Link } from "react-router-dom";
import { Background, Content, AnimationContainer } from "./style";
import { toast } from "react-toastify";
import axios from "axios";
import { InitialContainer } from "../../styles/mainContainers";
import { TextField } from "@material-ui/core";

const SignUpForm = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(4, "Mínimo de 4 dígitos")
      .required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Obrigatório: Letras maiúsculas e minúsculas, números e caracteres especiais"
      )
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    delete data.passwordConfirm;
    axios
      .post("https://kabit-api.herokuapp.com/users/", data)
      .then((response) => {
        toast.success("Cadastro concluído! Faça seu login abaixo.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          });
        reset({});
        history.push("/login");
      })
      .catch((e) => toast.error("Ops! Nome ou e-mail já cadastrados. Tente novamente", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        }))
  };

  return (
    <InitialContainer>
      <Content
        onSubmit={handleSubmit(handleForm)}
      >
        <AnimationContainer>
        <form>
          <h1>crie sua conta</h1>
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
            size="small"
            placeholder="E-mail"
            {...register("email")}
            helperText={errors.email?.message}
          />
          <TextField
            variant="outlined"
            margin="dense"
            size="small"
            placeholder="Senha"
            type="password"
            {...register("password")}
            helperText={errors.password?.message}
          />
          <TextField
            variant="outlined"
            margin="dense"
            size="small"
            placeholder="Confirmar senha"
            type="password"
            {...register("passwordConfirm")}
            helperText={errors.passwordConfirm?.message}
          />
          <button type="submit">Criar conta</button>
          <h2>
            Já possui conta? <Link to="/login">Faça seu login.</Link>
          </h2>
        </form>       
        </AnimationContainer>
      </Content>
      <Background />
    </InitialContainer>
  );
};

export default SignUpForm;

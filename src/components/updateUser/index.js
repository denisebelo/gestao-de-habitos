import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { TextField } from "@material-ui/core";
import { Container } from "./styles";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

const UpdateUser = ({ setOpenModal, setUser }) => {
  const tk = JSON.parse(localStorage.getItem("@gestaohabitosg5:token"));
  const decoded = jwtDecode(tk);

  const config = { headers: { Authorization: `Bearer ${tk}` } };
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onUpdateForm = (data) => {
    setOpenModal(false);
    api
      .patch(`/users/${decoded.user_id}/`, data, config)
      .then((response) => {
        toast.success("Nome de usuário atualizado");
        return response;
      })
      .then((res) => {
        setUser(res.data.username);
      })
      .catch(() => toast.error("Nome já existe!"));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onUpdateForm)}>
        <h2>altere sua conta</h2>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Novo nome de usuário"
          {...register("username")}
          helperText={errors.username?.message}
        />
        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
};
export default UpdateUser;

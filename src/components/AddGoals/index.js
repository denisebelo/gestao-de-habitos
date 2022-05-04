import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useGoalsActivities } from "../../Providers/Goals&Activities";
import { TextField } from "@material-ui/core";
import { Container } from "./style";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";

const AddGoalModal = ({ setOpenGoal, group, setGoalsList }) => {
  const id = group.id;
  const { getGroups } = useContext(GroupsContext);
  const { addGoal } = useGoalsActivities();
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Fácil, médio ou difícil?"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleAdd = (data) => {
    setOpenGoal(false);
    data.how_much_achieved = 0;
    data.group = id;
    const tk = JSON.parse(localStorage.getItem("@gestaohabitosg5:token"));
    api
      .post("/goals/", data, {
        headers: { Authorization: `Bearer ${tk}` },
      })
      .then((_) => toast.success("Meta criada!"));
    api
      .get(`/goals/?group=${group.id}`)
      .then((res) => setGoalsList(res.data.results))
      .then((res) => getGroups());
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleAdd)}>
        <h2>adicione uma meta</h2>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Meta"
          margin="dense"
          {...register("title")}
          helperText={errors.title?.message}
        />
        <TextField
          variant="outlined"
          size="small"
          margin="dense"
          placeholder="Dificuldade"
          {...register("difficulty")}
          helperText={errors.difficulty?.message}
        />
        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
};
export default AddGoalModal;

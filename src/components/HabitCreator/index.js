import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHabits } from "../../Providers/habits";
import HabitsCreatorContainer from "./style";
import { TextField } from "@material-ui/core";
import jwtDecode from "jwt-decode";

const HabitCreator = ({ setOpenModal }) => {
  const { addHabit } = useHabits();

  const schema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    category: yup.string().required("Categoria obrigatoria"),
    difficulty: yup.string().required("Dificuldade obrigatória"),
    frequency: yup.string().required("Frequência obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    setOpenModal(false);
    const tk = JSON.parse(localStorage.getItem("@gestaohabitosg5:token"));
    const userId = jwtDecode(tk).user_id;
    const completeData = Object.assign(data, {
      achieved: false,
      how_much_achieved: 0,
      user: userId,
    });
    addHabit(completeData, tk);
  };

  return (
    <HabitsCreatorContainer onSubmit={handleSubmit(handleForm)}>
      <h2>crie o seu hábito</h2>
      <TextField
        variant="outlined"
        size="small"
        margin="dense"
        placeholder="Título"
        {...register("title")}
        helperText={errors.title?.message}
      />
      <TextField
        variant="outlined"
        size="small"
        margin="dense"
        placeholder="Categoria"
        {...register("category")}
        helperText={errors.category?.message}
      />
      <TextField
        variant="outlined"
        size="small"
        margin="dense"
        placeholder="Dificuldade"
        {...register("difficulty")}
        helperText={errors.difficulty?.message}
      />
      <TextField
        variant="outlined"
        size="small"
        margin="dense"
        placeholder="Frequência"
        {...register("frequency")}
        helperText={errors.frequency?.message}
      />
      <button type="submit">Criar hábito</button>
    </HabitsCreatorContainer>
  );
};

export default HabitCreator;

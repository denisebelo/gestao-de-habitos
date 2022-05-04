import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useGoalsActivities } from "../../Providers/Goals&Activities";
import { TextField } from "@material-ui/core";
import { Container } from "./style";
import api from "../../services/api";
import { useToken } from "../../Providers/token";
import { toast } from "react-toastify";
import { useEffect, useState, useContext } from "react";
import { GroupsContext } from "../../Providers/groups";

const AddActivityModal = ({ setOpenActivity, group, setActivitiesList }) => {
  const id = group.id;
  const { token } = useToken();
  const { getGroups } = useContext(GroupsContext);

  const { addActivity } = useGoalsActivities();
  const schema = yup.object().shape({
    title: yup.string().required("Nome da atividade necessário"),
  });

  function timeFormat() {
    const month = {
      Jan: "01",
      Fev: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };
    let time = new Date().toString();
    time = time.split(" ");
    let YMD = [time[3], month[time[1]], time[2]];
    YMD = YMD.join("-");
    return `${YMD}T${time[4]}Z`;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleAdd = (data) => {
    setOpenActivity(false);
    const tk = JSON.parse(localStorage.getItem("@gestaohabitosg5:token"));
    data.realization_time = timeFormat();
    data.group = id;
    // addActivity(data);
    api
      .post("/activities/", data, {
        headers: { Authorization: `Bearer ${tk}` },
      })
      .then((_) => toast.success("Atividade criada!"))
      .then((_) => {
        api
          .get(`/activities/?group=${group.id}`)
          .then((res) => setActivitiesList(res.data.results))
          .then((res) => getGroups());
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleAdd)}>
        <h2>adicione uma atividade</h2>
        <TextField
          variant="outlined"
          size="small"
          margin="dense"
          placeholder="Atividade"
          {...register("title")}
          helperText={errors.title?.message}
        />
        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
};
export default AddActivityModal;

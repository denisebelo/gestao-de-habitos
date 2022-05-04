import { createContext, useContext, useState } from "react";
import { useToken } from "../token";
import api from "../../services/api";
import { toast } from "react-toastify";

const GoalsActivitiesContext = createContext();

export const GoalsActivitiesProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);
  const [activities, setActivities] = useState([]);
  const { token } = useToken();
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const getGoals = (ID, tk) => {
    api
      .get(`/goals/?group=${ID}`, {
        headers: { Authorization: `Bearer ${tk}` }
      })
      .then((res) => setGoals(res.data.results))
      .catch((e) => console.log(e));
  }

  const getActivities = (ID, tk) => {
    api
      .get(`/activities/?group=${ID}`, {
        headers: { Authorization: `Bearer ${tk}` }
      })
      .then((res) => setActivities(res.data.results))
      .catch((e) => console.log(e));
  }

  const deleteGoal = (id) => {
    api
      .delete(`/goals/${id}/`, config)
      .then((response) => setGoals(response.data), toast.info("Meta excluída"));
  };

  const addGoal = (data) => {
    api
      .post("/goals/", data, config)
      .then((_) => toast.success("Meta criada!"))
      .catch((e) => console.log(e));
  };

  const updateGoal = (data) => {
    const { achieved } = data;
    api
      .patch(`/goals/${goals.id}/`, { achieved: achieved }, config)
      .then((_) => toast.info("Meta atualizada"))
      .catch((e) => console.log("falha patch: ", e));
  };

  const deleteActivity = (id) => {
    api
      .delete(`/activities/${id}/`, config)
      .then(
        (response) => setActivities(response.data),
        toast.info("Atividade excluída")
      );
  };

  const addActivity = (data) => {
    api
      .post("/activities/", data, config)
      .then((_) => toast.success("Atividade criada!"))
      .catch((e) => console.log(e));
  };

  const updateActivity = (data) => {
    const { title } = data;
    api
      .patch(`/activities/${activities.id}/`, { title: title }, config)
      .catch((e) => console.log(e));
  };

  return (
    <GoalsActivitiesContext.Provider
      value={{
        goals,
        activities,
        setGoals,
        setActivities,
        getGoals,
        getActivities,
        deleteGoal,
        addGoal,
        updateGoal,
        deleteActivity,
        addActivity,
        updateActivity,
      }}
    >
      {children}
    </GoalsActivitiesContext.Provider>
  );
};
export const useGoalsActivities = () => useContext(GoalsActivitiesContext);

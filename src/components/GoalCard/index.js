import { useState, useEffect, useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import { useToken } from "../../Providers/token";
import api from "../../services/api";
import { BsCheck } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { GoalBox } from "./style";
import { toast } from "react-toastify";

const GoalCard = ({ goal, setGoalsList, group, goalsList }) => {
  const [isAchieved, setIsAchieved] = useState(goal.achieved);
  const [dinamicGoal, setDinamicGoal] = useState(goal.title);
  const [specificGoal, setSpecificGoal] = useState([]);
  const token = JSON.parse(localStorage.getItem('@gestaohabitosg5:token'))
  const { getGroups } = useContext(GroupsContext);
  const config = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    setDinamicGoal(goal.title);
  }, [goalsList]);

  const getOneGoal = () => {
    api
      .get(`/goals/${goal.id}/`)
      .then((response) => {
        setSpecificGoal(response);
        console.log(specificGoal);
      })
      .catch((err) => console.log(err));
  };

  const editGoal = () => {
    getOneGoal();
    const achievedGoal = { achieved: true };
    api
      .patch(`/goals/${goal.id}/`, achievedGoal, config)
      .then((res) => {
        toast.success("Meta concluída! Parabéns!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setIsAchieved(true);
        getGroups();
      })
      .catch((err) => console.log(err));
  };

  const deleteGoal = () => {
    const tk = JSON.parse(localStorage.getItem("@gestaohabitosg5:token"));
    api
      .delete(`/goals/${goal.id}/`, {
        headers: { Authorization: `Bearer ${tk}` },
      })
      .then((res) => api.get(`/goals/?group=${group.id}`))
      .then((res) => setGoalsList(res.data.results))
      .then((res) => getGroups())
      .then(() => toast.info('Meta deletada'))
      .catch((err) => console.log(err));
  };

  return (
    <GoalBox>
      <div className="goalTitle">{dinamicGoal}</div>
      <div className="goalButtons">
        {!isAchieved && (
          <button onClick={editGoal}>
            <BsCheck />
          </button>
        )}
        <button onClick={deleteGoal}>
          <AiOutlineDelete />
        </button>
      </div>
    </GoalBox>
  );
};

export default GoalCard;

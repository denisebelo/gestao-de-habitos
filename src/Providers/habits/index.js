import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useToken } from "../token";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const initialHabitsList = JSON.parse(localStorage.getItem('@gestaohabitosg5:habits')) || [];
  const [habitsList, setHabitsList] = useState(initialHabitsList);
  const { token } = useToken();
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const addHabit = (data, tk) => {
    console.log(data);
    api
      .post(
        "/habits/",
        data,
        { headers: { Authorization: `Bearer ${tk}` } }
      )
      .then((e) => {
        console.log(e);
        setHabitsList([...habitsList, e.data])
        toast.success("Hábito criado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        getHabits();
      })
      .catch((e) => {
        toast.error("Algo deu errado. Tente novamente.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        })
        console.log(e);
      });
  };

  const removeHabit = (id) => {
    const tk = JSON.parse(localStorage.getItem('@gestaohabitosg5:token'));
    api
      .delete(`/habits/${id}/`, {
        headers: { Authorization: `Bearer ${tk}` }
      })
      .then(() => getHabits());
  };

  const editHabit = (data, habit) => {
    const tk = JSON.parse(localStorage.getItem('@gestaohabitosg5:token'));
    api
      .patch(
        `/habits/${habit.id}/`,
        data, {
        headers: { Authorization: `Bearer ${tk}` }
      })
      .then(toast.success("Suas alterações foram salvas.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      }))
      .then(res => {
        habit = {
          ...habit,
          how_much_achieved: res.data.how_much_achieved,
          achieved: res.data.achieved
        }
        getHabits();
      }
      )
      .catch((e) => toast.error("Algo deu errado. Tente novamente.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      }));

  };

  const getHabits = () => {
    const tk = JSON.parse(localStorage.getItem('@gestaohabitosg5:token'))
    api
      .get("/habits/personal/", {
        headers: { Authorization: `Bearer ${tk}` }
      })
      .then((response) => {
        console.log('habitsProvider: ', response.data)
        setHabitsList(response.data);
        localStorage.setItem('@gestaohabitosg5:habits', JSON.stringify(response.data))
      })
  }

  // useEffect(() => {
  //   if (token) {
  //       .catch((err) => console.log(err));
  //   }
  // }, [token]);

  return (
    <HabitsContext.Provider
      value={{ habitsList, addHabit, removeHabit, editHabit, getHabits }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
export const useHabits = () => useContext(HabitsContext);

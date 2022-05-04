import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../../services/api";
import { useToken } from "../token";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const initialGroupsList = JSON.parse(localStorage.getItem('@gestaohabitosg5:groups')) || [];
  const [groupsList, setGroupsList] = useState(initialGroupsList);

  const getGroups = () => {
    const token = JSON.parse(localStorage.getItem('@gestaohabitosg5:token'))
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        setGroupsList(res.data)
        localStorage.setItem('@gestaohabitosg5:groups', JSON.stringify(res.data))
      })
      .catch((err) => console.log(err));
  }

  const removeGroup = () => { };

  const editGroup = (data, group, setRealGroup) => {
    const token = JSON.parse(localStorage.getItem('@gestaohabitosg5:token'))

    api.patch(`/groups/${group.id}/`,
      data,
      {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        group = {
          ...group,
          name: res.data.name,
          description: res.data.description,
          category: res.data.category
        }
        // setRealGroup(group);
      })
      // .then(
      //   api.get(`/groups/${group.id}/`)
      //     .then(res => {
      //       groupsList.filter(g => g.id !== group.id);
      //       groupsList.push(res.data)
      //       // setGroupsList(groupsList)
      //     })
      //     .then(res => console.log(res))
      .catch(err => console.log(err))

  };

  return (
    <GroupsContext.Provider
      value={{ groupsList, getGroups, setGroupsList, removeGroup, editGroup }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

import ListContainer from "./style";
import { GroupsContext } from "../../Providers/groups";
import { useContext, useState, useEffect } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

const SubscribeGroupList = ({ result }) => {
  console.log(result.id);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { groupsList, setGroupsList, getGroups } = useContext(GroupsContext);

  useEffect(() => {
    // Verifica se usuário já é inscrito naquele grupo. Se for, desabilita o botão
    if (groupsList.find((group) => group.id === result.id)) {
      setIsSubscribed(true);
    }
  }, []);

  const handleSubscription = () => {
    const tk = JSON.parse(localStorage.getItem("@gestaohabitosg5:token"));
    api
      .post(
        `groups/${result.id}/subscribe/`,
        {},
        {
          headers: { Authorization: `Bearer ${tk}` },
        }
      )
      .then((res) => {
        toast.success("Inscrição feita com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setIsSubscribed(true);
      })
      .then((res) =>
        api
          .get("/groups/subscriptions/", {
            headers: { Authorization: `Bearer ${tk}` },
          })
          .then((res) => {
            setGroupsList(res.data);
          })
      )
      .catch((err) => console.log(err));
  };

  return (
    <ListContainer isSubscribed={isSubscribed}>
      <p> {result.name} </p>
      {isSubscribed ? (
        <button className="disabledButton" disabled>
          {" "}
          Inscrito{" "}
        </button>
      ) : (
        <button onClick={handleSubscription}> Inscrever-se </button>
      )}
    </ListContainer>
  );
};

export default SubscribeGroupList;

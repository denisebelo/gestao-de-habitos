import { FiActivity, FiBook } from "react-icons/fi";
import { BsBriefcase } from "react-icons/bs";
import GroupCreaterContainer from "./style";
import { useState, useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useToken } from "../../Providers/token";
import { GroupsContext } from "../../Providers/groups";
import { toast } from "react-toastify";

const GroupCreatorPopup = ({ setOpenModalCreator }) => {
  const { setGroupsList, getGroups } = useContext(GroupsContext);
  const [selectedArray, setSelectedArray] = useState([1, 0, 0]);
  const categories = ["Saúde", "Estudos", "Trabalho"];
  // const { token } = useToken();

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const highlightSelected = (pos) => {
    let updated = selectedArray;
    if (Math.max(...selectedArray) === 1) {
      // Verifica se tem um '1' no array
      updated = selectedArray.map((e) => (e = 0)); // Se tiver zera tudo
    }

    updated.splice(pos, 1, 1); // E coloca um 1 na posição indicada pelo parâmetro
    setSelectedArray(updated);
  };

  const getCategory = () => {
    return categories.filter((el, index) => el && selectedArray[index]); // Essa função parte do fato do "selectedArray" ter apenas um valor truthy, que é o 1,
  }; //  a partir disso, foi montado um array com as atuais categorias, nas mesmas posições
  //  de selectedArray. A partir disso, ele verifica em qual posição está o truthy de selectedArray
  //  e pega o elemento dessa mesma posição em "categories".

  const createGroup = (data) => {
    const token = JSON.parse(localStorage.getItem('@gestaohabitosg5:token'));
    setOpenModalCreator(false);
    const categoryArr = getCategory();
    data.category = categoryArr[0];
    // const tk = JSON.parse(localStorage.getItem('@gestaohabitosg5:token'));
    api
      .post("/groups/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("Grupo criado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        })
        getGroups();
      }
      )
      .then((res) =>
        api
          .get("/groups/subscriptions/", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => setGroupsList(res.data))
      )
      .catch(() =>
        toast.error("Algo deu errado. Tente novamente.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        })
      );
  };

  return (
    <GroupCreaterContainer
      selectedArray={selectedArray}
      onSubmit={handleSubmit(createGroup)}
    >
      <section>
        <h2> crie seu grupo </h2>
        <input placeholder="Nome do grupo" {...register("name")} />
        {errors.name && <span> {errors.name.message} </span>}
        <input placeholder="Descrição" {...register("description")} />
        {errors.description && <span> {errors.description.message} </span>}
      </section>
      <section>
        <h3> selecione a categoria: </h3>
        <div>
          <p onClick={() => highlightSelected(0)}>
            <FiActivity className="health" /> <br /> saúde
          </p>
          <p onClick={() => highlightSelected(1)}>
            <FiBook className="study" /> <br /> estudos
          </p>
          <p onClick={() => highlightSelected(2)}>
            <BsBriefcase className="work" /> <br /> trabalho
          </p>
        </div>
        <button>Criar grupo</button>
      </section>
      {/* <FiXCircle /> */}
    </GroupCreaterContainer>
  );
};

export default GroupCreatorPopup;

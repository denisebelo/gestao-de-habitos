import { FiActivity, FiBook } from "react-icons/fi";
import { BsBriefcase } from "react-icons/bs";
import GroupCreaterContainer from "./style";
import { useContext, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useToken } from "../../Providers/token";
import { toast } from "react-toastify";
import { GroupsContext } from "../../Providers/groups";

const GroupEditorPopup = ({ setOpenGroupEditor, group, setName, userID }) => {
  const [selectedArray, setSelectedArray] = useState([1, 0, 0]);
  const categories = ["Saúde", "Estudos", "Trabalho"];
  const { token } = useToken();
  const { editGroup } = useContext(GroupsContext);
  // const userID = jwtDecode(
  //     JSON.parse(localStorage.getItem('@gestaohabitosg5:token'))
  // ).user_id

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

  const handleEditGroup = (data) => {
    if (userID === group.creator.id) {
      setOpenGroupEditor(false);
      const categoryArr = getCategory();
      data.category = categoryArr[0];
      setName(data.name);
      toast.success("Grupo atualizado com sucesso!");
      editGroup(data, group);
    } else {
      toast.error("Você não tem permissão para editar um grupo");
    }
  };

  return (
    <GroupCreaterContainer
      selectedArray={selectedArray}
      onSubmit={handleSubmit(handleEditGroup)}
    >
      <section>
        <h2> editar grupo </h2>
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
        <button>Editar grupo</button>
      </section>
    </GroupCreaterContainer>
  );
};

export default GroupEditorPopup;

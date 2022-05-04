import { useHabits } from "../../Providers/habits";
import { HabitContainer } from "./style";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { EditText } from 'react-edit-text';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const HabitCard = ({ habit }) => {
  const { removeHabit, editHabit } = useHabits();
  const [inputValue, setInputValue] = useState(habit.how_much_achieved);
  const [showInput, setShowInput] = useState(false);
  const [achieved, setAchieved] = useState(habit.achieved);

  const correctInput = (e) => {
    setShowInput(false);
    // setAchieved(false);
    let isComplete = false;
    e.value = parseInt(e.value);
    if (e.value < 0) {
      e.value = 0;
    } else if (e.value >= 100) {
      e.value = 100;
      isComplete = true
    }
    setAchieved(isComplete)
    setInputValue(e.value);
    editHabit({
      how_much_achieved: e.value,
      achieved: isComplete
    }, habit)
  }

  const resetHabit = () => {
    editHabit({
      how_much_achieved: 0,
      achieved: false
    }, habit)
    setInputValue(0);
    setAchieved(false);
  }

  return (
    <HabitContainer>
      <h1>
        {habit.title} {achieved && <FaCheckCircle />}
      </h1>
      <h3>Categoria: {habit.category}</h3>
      <h3>Dificuldade: {habit.difficulty}</h3>

      <div>
        Progresso:
        <div className="circleContainer">
          <CircularProgressbar
            value={inputValue}
            text={`${inputValue}%`}
            styles={buildStyles({
              textColor: '#FFF',
              textSize: '25px'
            })} />
          <div className='progressEdit'>
          </div>
        </div>
      </div>

      <div className="HabitButtons">

        <button onClick={() => removeHabit(habit.id)}>Remover hábito</button>
        {!achieved ?
          <button onClick={() => setShowInput(true)}>Atualizar progresso</button>
          :
          <button onClick={resetHabit} className='reset' >Reiniciar hábito</button>
        }
        {showInput && <EditText
          min='0'
          max='100'
          defaultValue={`${inputValue}`}
          onSave={correctInput}
          style={{
            color: '#FFF',
            textAlign: 'center',
            padding: '2px',
            fontSize: '16px',
            border: 'none',
            backgroundColor: "transparent",
            width: '50px'
          }} />
        }
      </div>
    </HabitContainer>
  );
};

export default HabitCard;

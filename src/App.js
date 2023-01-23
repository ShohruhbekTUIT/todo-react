import { useRef, useState } from 'react';
import Input from './Components/Input';
import TodoItem from './Components/TodoItem';
import Select from './Components/Select/main';
import Localization from "./Assets/Localization/Localization";
import "./Assets/main.css"

function App() {
	const elSelect = useRef();
  const [lang , setLang] = useState("en");

	const [todos, SetTodos] = useState(
		JSON.parse(window.localStorage.getItem('todos')) || [],
	);

	const handleInput = (evt) => {
		const newTodo = {
			id: todos[todos.length - 1]?.id + 1 || 0,
			title: evt.target.value,
			isCompleted: false,
		};

		if (evt.code === 'Enter') {
			window.localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
			SetTodos([...todos, newTodo]);
			evt.target.value = '';
		}
	};

	const deleteTodo = (evt) => {
		const deleteId = evt.target.dataset.id - 0;

		const filteredTodos = todos.filter((item) => item.id !== deleteId);
		window.localStorage.setItem('todos', JSON.stringify(filteredTodos));
		SetTodos(filteredTodos);
	};

  const handleCompleted = (evt) => {
    const completedId = evt.target.dataset.id - 0;
    const findedItem = todos.find(item => item.id === completedId);
    findedItem.isCompleted = !findedItem.isCompleted;
    window.localStorage.setItem('todos', JSON.stringify(todos));
    SetTodos([...todos])
  }
	const renderActive = () =>{
    const filterActiv = JSON.parse(window.localStorage.getItem('todos')).filter(item => !item.isCompleted)
    SetTodos(filterActiv);
  }

  const renderAll = () =>{
    SetTodos(JSON.parse(window.localStorage.getItem('todos')));
  }

  const renderCompleted = () =>{
    const filterCompleted = JSON.parse(window.localStorage.getItem('todos')).filter(item => item.isCompleted)
    SetTodos(filterCompleted);
  }

	return (
		<>
			<h1 className='siteTitle'>{Localization[lang].title}<img className='site-logo' src="./check.png" alt="Check icon" width={35} height={35}/></h1>
			
			<Input handleInput={handleInput}  placeholder={Localization[lang].placeholder}/>
			{/* <Select elSelect={elSelect} setLang={setLang} ref={ref}/> */}
			<select className='site-lang' onChange={() => {
      setLang(elSelect.current.value)
    }} ref={elSelect}>
      <option value="uz">UZ</option>
      <option value="ru">RU</option>
      <option value="en">EN</option>
    </select>
			<ol className='siteList'>
				{todos.map((item) => (
					<TodoItem isCompleted={item.isCompleted} handleCompleted={handleCompleted} deleteTodo={deleteTodo} key={item.id} props={item} />
				))}
			</ol>

			<div className="site-btns">
        <strong className="site-todo">{todos.length} {Localization[lang].text}</strong>
        <div className="btns">
          <button onClick={renderAll} className="btn">{Localization[lang].buttonAll}</button>
          <button onClick={renderActive} className="btn">{Localization[lang].buttonActive}</button>
          <button onClick={renderCompleted} className="btn">{Localization[lang].buttonCompleted}</button>
        </div>
        </div>
		</>
	);
}

export default App;

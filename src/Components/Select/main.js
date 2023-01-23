function Select(props){

  return(
    <select onChange={() => {
      props.setLang(props.elSelect.current.value)
    }} ref={props.elSelect}>
      <option value="uz">UZ</option>
      <option value="ru">RU</option>
      <option value="en">EN</option>
    </select>
  );
}

export default Select
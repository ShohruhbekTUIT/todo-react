const Input = ({ handleInput, placeholder }) => {
	return (
		<input
			className='siteInput form-control'
			onKeyUp={handleInput}
			type='text'
			aria-label='Todo...'
			placeholder={placeholder}
		/>
	);
};
export default Input;

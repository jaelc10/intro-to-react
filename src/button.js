const Button = (props) => {
	//
	const {onClickFunction, buttonText} = props;

	return (
		<button onClick={onClickFunction}>{buttonText}</button>
		)
}

export default Button;

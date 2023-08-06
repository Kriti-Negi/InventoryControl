function SignUpLogInTextInput(props){
    return (
        <input
            type = {props.type}
            placeholder = {props.placeholder}
            value = {props.value}
            onChange = {(e) => props.onChange(e)}
        />
    )
}

export default SignUpLogInTextInput;
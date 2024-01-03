import { InputHTMLAttributes } from "react";

import c from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input({ type, value, placeholder, onChange, required }: InputProps) {
	return (
		<label className={c.container}>
			<input
				className={c.input}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				required={required}
			/>
		</label>
	);
}

export default Input;

import { useState } from "react";

import Button from "components/Button";
import Input from "components/Input";

import c from "./LoginForm.module.scss";

function LoginForm() {
	const [login, setLogin] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<form className={c.form}>
			<Input
				onChange={(event) => setLogin(event.target.value)}
				value={login}
				placeholder="*Логин/почта"
				required
			/>
			<Input
				onChange={(event) => setPassword(event.target.value)}
				value={password}
				placeholder="*Пароль"
				type="password"
				required
			/>
			<span className={c.forgot}>Забыли пароль??</span>
			<Button onClick={() => {}}>Войти</Button>
		</form>
	);
}

export default LoginForm;

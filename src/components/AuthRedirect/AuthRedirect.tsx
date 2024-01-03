import c from "./AuthRedirect.module.scss";

function AuthRedirect() {
	return (
		<div className={c.container}>
			<span>Нет учетной записи??</span>
			<span>Зарегистрироваться</span>
		</div>
	);
}

export default AuthRedirect;

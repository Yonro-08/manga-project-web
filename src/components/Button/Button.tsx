import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

import c from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({
	children,
	onClick,
	className,
	type = "button",
}: ButtonProps) {
	return (
		<button
			type={type}
			className={classNames(
				{ [c.button]: true },
				className ? { [className]: true } : {}
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;

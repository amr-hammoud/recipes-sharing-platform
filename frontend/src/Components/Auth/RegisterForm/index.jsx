import React, { useState } from "react";
import Input from "../../Base/Input";
import Button from "../../Base/Button";
import { useNavigate } from "react-router-dom";
import { sendRequest } from "../../../config/request";
import { localStorageAction } from "../../../config/localstorage";

const RegisterForm = ({ onToggle }) => {
	const navigation = useNavigate();

	const [info, setInfo] = useState({
		username: null,
		first_name: null,
		last_name: null,
		email: null,
		password: null,
	});

	const [error, setError] = useState(null);

	const registerHandler = async () => {
		try {
			const response = await sendRequest({
				method: "POST",
				route: "/guest/register",
				body: info,
			});

			localStorageAction("token", response.data.token);

			navigation("/recipes");
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
	};

	return (
		<div className="flex column spaceBetween text-center light-bg rounded authenticationBox">
			<h1 className="color-primary">Register</h1>
			<Input
				label={"First Name"}
				placeholder={"first name"}
				onChange={(first_name) =>
					setInfo({
						...info,
						first_name,
					})
				}
			/>
			<Input
				label={"Last Name"}
				placeholder={"last name"}
				onChange={(last_name) =>
					setInfo({
						...info,
						last_name,
					})
				}
			/>
			<Input
				label={"Username"}
				placeholder={"username"}
				onChange={(username) =>
					setInfo({
						...info,
						username,
					})
				}
			/>
			<Input
				label={"Email"}
				placeholder={"email@example.com"}
				onChange={(email) =>
					setInfo({
						...info,
						email,
					})
				}
			/>
			<Input
				label={"Password"}
				placeholder={"min 6 characters"}
				onChange={(password) =>
					setInfo({
						...info,
						password,
					})
				}
			/>
			<div className="flex center">
				<Button
					color={"primary-bg"}
					textColor={"white-text"}
					text={"Signup"}
					onClick={() => registerHandler()}
				/>
			</div>
			<div className="auth-background-image" />
			<p className="black-text">
				Already have an account?
				<br />
				<span
					className="pointer color-primary"
					onClick={() => onToggle()}
				>
					Login
				</span>
			</p>
		</div>
	);
};

export default RegisterForm;

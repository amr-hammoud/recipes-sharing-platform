import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { FiUser } from "react-icons/fi";
import NavbarItem from "../../Base/NavbarItem";
import { useNavigate } from "react-router-dom";

const Navbar = ({ items, selected = null }) => {
	const [selectedTab, setSelectedTab] = useState(selected);

	const selectHandler = (label) => {
		setSelectedTab(label);
	};

	const [dropdownIsActive, setdropdownIsActive] = useState(false);

	const navigate = useNavigate();

	// useEffect(() => {
	// 	if (localStorage.getItem("access_token") == null) {
	// 		navigate("/");
	// 	}
	// }, []);


	const handleDropdown = () => {
		setdropdownIsActive(!dropdownIsActive);
	};

	const handleLogout = () => {
		setTimeout(() => {
			localStorage.removeItem("token");
			navigate("/");
		}, 1000);
	};

	const handleNavigation = (route) => {
		navigate(`/${route}`)
		setdropdownIsActive(false)
	}


	return (
		<div className="navbar">
			<div className="items">
				{items?.map((item, index) => {
					return (
						<NavbarItem
							key={index}
							label={item}
							selected={selectedTab === item}
							onSelected={(label) => selectHandler(label)}
						/>
					);
				})}
			</div>
			<div
				className={dropdownIsActive ? "profile active" : "profile"}
				onClick={() => handleDropdown()}
			>
				<FiUser />
			</div>
			{dropdownIsActive &&
				<div className="profile-dropdown">
					<div className="profile-dropdown-item" onClick={() => handleNavigation("profile")}>Profile</div>
					<div className="profile-dropdown-item" onClick={() => handleLogout()}>Logout</div>
				</div>}
		</div>
	);
};

export default Navbar;

import React from "react";
import "./style.css";
import { MdClose } from "react-icons/md";

const Popup = ({ text, popupIsShown = false, handlePopup }) => {
	return (
		popupIsShown && (
			<div className="popup" onClick={() => handlePopup()}>
				<div className="popup-close-button">
					<MdClose />
				</div>
				{text}
			</div>
		)
	);
};

export default Popup;

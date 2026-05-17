import "./styles.css"
import { useState } from "react";
import { X } from "lucide-react";

export default function ErrorModal({ openModalError, setOpenModalError }) {

    return (
        <>
            {openModalError &&
                <div className="modal-overlay">
                    <div className="color-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header" >
                            <p>Error</p>
                            <button onClick={() => setOpenModalError(false)}>
                                <X size={16} />
                            </button>
                        </div>
                        <span id="modal-note"><p>sorry, an error occurred. please try again later.</p></span>
                            <div className="modal-form-actions">
                                <button id="ok" type="button" onClick={() => setOpenModalError(false)}>OK</button>
                            </div>
                    </div>
                </div>
            }
        </>
    )
}

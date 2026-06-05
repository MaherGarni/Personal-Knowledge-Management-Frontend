import "./styles.css"
import { useState } from "react";
import { X } from "lucide-react";

export default function UnauthorizedModal({ openModalError, setOpenModalError }) {

    return (
        <>
            {openModalError &&
                <div className="modal-overlay">
                    <div className="color-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header" >
                            <p s>Unauthorized</p>
                            <button onClick={() => setOpenModalError(false)}>
                                <X size={16} />
                            </button>
                        </div>
                        <span id="modal-note"><p style={{ paddingLeft: '16px' }}>Invalid credentials, please try again.</p></span>
                        <div className="modal-form-actions">
                            <button id="ok" type="button" onClick={() => setOpenModalError(false)}>OK</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

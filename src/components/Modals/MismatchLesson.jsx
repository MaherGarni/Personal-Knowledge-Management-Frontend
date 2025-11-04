import "./styles.css"
import { useState } from "react";
import { X } from "lucide-react";

export default function MismatchLesson({ openModalMismatch, setOpenModalMismatch }) {

    return (
        <>
            {openModalMismatch &&
                <div className="modal-overlay">
                    <div className="color-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header" >
                            <p>Lesson Category Mismatch</p>
                            <button onClick={() => setOpenModalMismatch(false)}>
                                <X size={16} />
                            </button>
                        </div>
                        <span id="modal-note"><p>This lesson does not match the selected category. Please select a more appropriate category before saving.</p></span>
                            <div className="modal-form-actions">
                                <button id="ok" type="button" onClick={() => setOpenModalMismatch(false)}>OK</button>
                            </div>
                    </div>
                </div>
            }
        </>
    )
}

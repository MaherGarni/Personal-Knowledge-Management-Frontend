import React from 'react'
import { Loader, Circle, CircleX } from "lucide-react";
export default function EvaluationMismatch({ openEvaluationMismatch, setOpenEvaluationMismatch, category }) {
    return (
        <>
            {openEvaluationMismatch &&
                <div className="modal-overlay">
                    <div className="color-modal" onClick={(e) => e.stopPropagation()}>
                        <div className='modal-header'>
                            <div>
                                <div className='mismatch-header'>
                                    <CircleX color='red' strokeWidth={2} size={32} />
                                    <h2>Lesson Mismatch</h2>
                                </div>
                                <div className='mismatch-skill'>
                                    <p><span className='greyed-out'>Skill:</span></p>
                                    <p>{category.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className='mismatch-message'>
                            <p>This lesson does not match the selected category. Please select a more appropriate category before saving.</p>
                        </div>
                        <div className='loading-container'>
                            <div className='stages-container'>
                                <div className='stage-container'>
                                    <div className='stage-description'>
                                        <div className='stage-header'>
                                            <div className='stage-status'><CircleX size={24} color='white' fill='red' /></div>
                                            <div className='stage-name'><p>Lesson Matching</p></div>
                                        </div>
                                        <div className='stage-brief'>
                                        </div>
                                    </div>
                                </div>
                                <div className='stage-container'>
                                    <div className='stage-description'>
                                        <div className='stage-header'>
                                            <div className='stage-status'><Circle size={24} color='grey'/></div>
                                            <div className='stage-name'><p style={{textDecoration: 'line-through'}}>Scoring Lesson</p></div>
                                        </div>
                                        <div className='stage-brief'>
                                        </div>
                                    </div>
                                </div>
                                <div className='stage-container'>
                                    <div className='stage-description'>
                                        <div className='stage-header'>
                                            <div className='stage-status'><Circle size={24} color='grey'/></div>
                                            <div className='stage-name'><p style={{textDecoration: 'line-through'}}>Updating Ratings</p></div>
                                        </div>
                                        <div className='stage-brief'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-form-actions">
                            <button id="ok" type="button" onClick={() => setOpenEvaluationMismatch(false)}>OK</button>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

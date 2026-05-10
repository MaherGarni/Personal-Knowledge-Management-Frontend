import React from 'react'
import { Loader, Circle } from "lucide-react";
export default function EvaluationLoadingComponent({ openEvaluationLoading, setOpenEvaluationLoading, failedEvaluation }) {
    return (
        <>
            {openEvaluationLoading &&
                <div className="modal-overlay">
                    <div className="color-modal" onClick={(e) => e.stopPropagation()}>
                        <div className='modal-header'>
                            <div>
                                <h2>Evaluation Loading...</h2>
                                <span className='greyed-out'>
                                    <p>please wait while we evaluate your lessons</p>
                                </span>
                            </div>
                        </div>
                        <div className='loading-container'>
                            <div className='stages-container'>
                                <div className='stage-container'>
                                    <div className='stage-description'>
                                        <div className='stage-header'>
                                            <div className='stage-status'><Circle size={14} /></div>
                                            <div className='stage-name'><p>Lesson Matching</p></div>
                                        </div>
                                        <div className='stage-brief'>
                                            <div className='extra-space'></div>
                                            <div className='greyed-out'>checking lesson relevance to chosen skill </div></div>
                                    </div>
                                </div>
                                <div className='stage-container'>
                                    <div className='stage-description'>
                                        <div className='stage-header'>
                                            <div className='stage-status'><Circle size={14} /></div>
                                            <div className='stage-name'><p>Scoring Lesson</p></div>
                                        </div>
                                        <div className='stage-brief'>
                                            <div className='extra-space'></div>
                                            <div className='greyed-out'>Evaluating lesson quality and depth</div></div>
                                    </div>
                                </div>
                                <div className='stage-container'>
                                    <div className='stage-description'>
                                        <div className='stage-header'>
                                            <div className='stage-status'><Circle size={14} /></div>
                                            <div className='stage-name'><p>Updating Ratings</p></div>
                                        </div>
                                        <div className='stage-brief'>
                                            <div className='extra-space'></div>
                                            <div className='greyed-out'>Applying lesson points to the skill rating </div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

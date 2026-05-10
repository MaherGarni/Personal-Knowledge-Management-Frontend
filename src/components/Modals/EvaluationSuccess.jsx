import React from 'react'
import { Loader, Circle, CircleX, Sparkles, MoveRight } from "lucide-react";
export default function EvaluationSuccess({ openEvaluationSuccess, setOpenEvaluationSuccess, setOpenModalForm, category, lessonStats, oldRating }) {
    return (
        <>
            {openEvaluationSuccess &&
                <div className="modal-overlay">
                    <div className="color-modal" onClick={(e) => e.stopPropagation()}>
                        <div className='modal-header'>
                            <div>
                                <div className='success-header'>
                                    <Sparkles color={category.color} strokeWidth={1} size={32} />
                                    <h2>Evaluation Complete </h2>
                                </div>
                            </div>
                        </div>
                        <div className='success-cards'>
                            <div className='success-card'>
                                <div className='success-card-header'>
                                    <span className='greyed-out'>Lesson Score</span>
                                </div>
                                <div className='success-card-stat'>
                                    {lessonStats.score}/100
                                </div>
                            </div>
                            <div className='success-card'>
                                <div className='success-card-header'>
                                    <span className='greyed-out'>Points Earned</span>
                                </div>
                                <div className='success-card-stat' style={{ color: category.color }}>
                                    +{lessonStats.points}
                                </div>
                            </div>
                        </div>
                        <div className='skill-data'>
                            <div className='skill-data-brief'>
                                <span className='greyed-out'>Skill</span>
                            </div>
                            <div className='skill-data-info'>
                                <p>{category.name}</p>
                                <p><span className='greyed-out'>{oldRating} </span><span className='centered'><MoveRight size={16} /></span> {category.rating}</p>
                            </div>
                            <div className='progress-bar'>
                                <div style={{
                                    height: '100%',
                                    width: `${category.rating}%`,
                                    backgroundColor : category.color,
                                    borderRadius : '4px'
                                }}>
                                </div>
                            </div>
                        </div>
                        <div className="modal-form-actions">
                            <button id="ok" type="button" onClick={() => {
                                setOpenModalForm(false);
                            }}>OK</button>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

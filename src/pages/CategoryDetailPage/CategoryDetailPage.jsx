import "./styles.css"
import { useEffect, useState } from "react"
import { useParams } from 'react-router'
import LessonDetailPage from "../LessonDetailPage/LessonDetailPage"
import LessonCard from "../../components/LessonCard/LessonCrad"
import FormModal from "../../components/Modals/FormModal"
import Spinner from "../../components/Spinner/Spinner"

import EvaluationMismatch from "../../components/Modals/EvaluationMismatch";
import EvaluationSuccess from "../../components/Modals/EvaluationSuccess";
import { Plus } from "lucide-react";

import * as categoryAPI from "../../utilities/category-api"

export default function CategoryDetailPage({ user, setUser }) {
    const [category, setCategory] = useState(null)
    const [lessons, setLessons] = useState([])
    const [currLesson, setCurrLesson] = useState(null)

    const [openModalForm, setOpenModalForm] = useState(false)
    const [openEvaluationSuccess, setOpenEvaluationSuccess] = useState(false)

    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        async function getAllCategoryLessons() {
            try {
                const categoryDetailData = await categoryAPI.detail(id)
                setIsLoading(false)
                setCategory(categoryDetailData.category)
                setLessons(categoryDetailData.lessons)
                setCurrLesson(categoryDetailData.lessons[0] ? categoryDetailData.lessons[0] : null)
            } catch (err) {
                console.log(err);
            }
        }
        getAllCategoryLessons()
    }, [id])


    const isLimitReached = user.dailyCallsCounter >= user.dailyAiLimit;


    if (isLoading) return (<Spinner />)


    return (
        <>
            <div className="category-layout">
                <div className="category-lessons">
                    <div className="category-lessons-header">
                        <div className="category-info">
                            <h2>{category.name}</h2>
                            <p>{lessons.length} lessons</p>
                        </div>
                        <div className="category-rating">
                            <p style={{ color: `${category.color}`, fontWeight: 'bold' }}>{category.rating}</p>
                        </div>
                    </div>
                    <div className="lessons-container" style={{ overflowY: 'auto' }}>
                        <button
                            className={`add-lesson ${isLimitReached ? 'btn-disabled' : ''}`}
                            onClick={() => { if (!isLimitReached) setOpenModalForm(true) }}
                            disabled={isLimitReached}
                        >
                            <Plus size={20} /><b>New Lesson</b>
                        </button>
                        <div className="lessons-daily-limits">
                            <div className="limits-data greyed-out">
                                <p>lessons per day</p>
                                <p>{user.dailyCallsCounter} / {user.dailyAiLimit}</p>
                            </div>

                            <div className='limits-meter progress-bar' style={{ height: '8px' }}>
                                <div style={{
                                    height: '100%',
                                    width: `${user.dailyCallsCounter / user.dailyAiLimit * 100}%`,
                                    backgroundColor: category.color,
                                    borderRadius: '4px'
                                }}>
                                </div>
                            </div>

                        </div>
                        {
                            lessons.map((lesson) => (
                                <LessonCard key={lesson.id} lesson={lesson} currLesson={currLesson} setCurrLesson={setCurrLesson} setLessons={setLessons} category={category} setCategory={setCategory} user={user} setUser={setUser} />
                            ))
                        }
                    </div>
                </div>
                <div className="lesson-detail-page">
                    <LessonDetailPage currLesson={currLesson} category={category} />
                </div>
            </div>
            {openModalForm &&
                <FormModal openModalForm={openModalForm} setOpenModalForm={setOpenModalForm} category={category} setCategory={setCategory} setLessons={setLessons} setCurrLesson={setCurrLesson} user={user} setUser={setUser} />
            }
        </>
    )
}

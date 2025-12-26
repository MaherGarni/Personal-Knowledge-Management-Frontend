import "./styles.css"
import { useEffect, useState } from "react"
import { useParams } from 'react-router'
import LessonDetailPage from "../LessonDetailPage/LessonDetailPage"
import LessonCard from "../../components/LessonCard/LessonCrad"
import FormModal from "../../components/Modals/FormModal"
import { BookPlus } from "lucide-react";

import * as categoryAPI from "../../utilities/category-api"

export default function CategoryDetailPage() {
    const [category, setCategory] = useState(null)
    const [lessons, setLessons] = useState([])
    const [currLesson, setCurrLesson] = useState(null)
    const [openModalForm, setOpenModalForm] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        async function getAllCategoryLessons() {
            try {
                const categoryDetailData = await categoryAPI.detail(id)
                setCategory(categoryDetailData.category)
                setLessons(categoryDetailData.lessons)
                setCurrLesson(categoryDetailData.lessons[0] ? categoryDetailData.lessons[0] : null)
            } catch (err) {
                console.log(err);
            }
        }
        getAllCategoryLessons()
    }, [id])

    /////  huge thing dont' forget about, what about there is no lessons///////////

    if (!category) return <h1>Loading...</h1>

    return (
        <>
            <div className="category-layout">
                <div className="category-lessons">
                    <div className="category-lessons-header">
                        <h2>{category.name}</h2>
                        <p>{category.rating}</p>
                    </div>
                    <div className="lessons-container">
                        <button className="add-lesson" onClick={() => { setOpenModalForm(true) }}> <BookPlus size={20}/><b>Lesson</b></button>
                        {
                            lessons.map((lesson) => (
                                <LessonCard key={lesson.id} lesson={lesson} setCurrLesson={setCurrLesson} setLessons={setLessons} category={category} />
                            ))
                        }
                    </div>
                </div>
                <div className="lesson-detail-page">
                    <LessonDetailPage currLesson={currLesson} />
                </div>
            </div>
            {openModalForm &&
                <FormModal openModalForm={openModalForm} setOpenModalForm={setOpenModalForm} category={category} setCategory={setCategory} setLessons={setLessons} setCurrLesson={setCurrLesson} />
            }
        </>
    )
}

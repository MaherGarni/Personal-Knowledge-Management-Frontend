import { useState } from "react";
import "./styles.css"
import { Trash, SquarePen } from "lucide-react";
import DeleteConformationLesson from "../Modals/DeleteConformationLesson";
import UpdateLesson from "../Modals/UpdateLesson";

export default function LessonCrad({ lesson, setCurrLesson, setLessons, category }) {
    const [openModalConfirmDeletion, setOpenModalConfirmDeletion] = useState(false)
    const [openModalFormUpdate, setOpenModalFormUpdate] = useState(false)

    const formattedDate = new Date(lesson.updated_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
    });

    return (
        <>
            <div className="lesson-card" onClick={(evt) => { setCurrLesson(lesson) }}>
                <div className="lesson-card-header">
                    <h5>{lesson.title}</h5>
                    <div className="lesson-card-actions">
                        <button onClick={() => setOpenModalConfirmDeletion(true)}>
                            <Trash size={16} />
                        </button>
                        <button onClick={() => setOpenModalFormUpdate(true)}>
                            <SquarePen size={16} />
                        </button>
                    </div>
                </div>
                <span className="greyed-out">
                    <p>{lesson.content}</p>
                </span>
                <span className="greyed-out">
                    <p>{formattedDate}</p>
                </span>
            </div>
            {openModalConfirmDeletion &&
                <DeleteConformationLesson openModalConfirmDeletion={openModalConfirmDeletion} setOpenModalConfirmDeletion={setOpenModalConfirmDeletion} Lesson={lesson} setLessons={setLessons} setCurrLesson={setCurrLesson} category={category} />
            }
            {openModalFormUpdate &&
                <UpdateLesson openModalForm={openModalFormUpdate} setOpenModalForm={setOpenModalFormUpdate} lesson={lesson} setLessons={setLessons} setCurrLesson={setCurrLesson} category={category} />
            }
        </>
    )
}

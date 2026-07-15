from sqlalchemy import select
from sqlalchemy.orm import Session
from app.models.course import Course
from app.schemas.course import CourseCreate

def get_courses(db: Session) -> list[Course]:
    return list(db.scalars(select(Course)).all())

def get_course(db: Session, course_id: int) -> Course | None:
    return db.get(Course, course_id)

def create_course(db: Session, payload: CourseCreate) -> Course:
    course = Course(name=payload.name, description=payload.description)
    db.add(course)
    db.commit()
    db.refresh(course)
    return course
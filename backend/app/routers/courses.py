from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.course import CourseOut, CourseCreate
from app import crud

router = APIRouter(prefix="/api/courses", tags=["courses"])

@router.get("", response_model=list[CourseOut])
def list_courses(db: Session = Depends(get_db)):
    return crud.course.get_courses(db)

@router.get("/{course_id}", response_model=CourseOut)
def read_course(course_id: int, db: Session = Depends(get_db)):
    course = crud.course.get_course(db, course_id)
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    return course

@router.post("", response_model=CourseOut, status_code=201)
def create_course_endpoint(payload: CourseCreate, db: Session = Depends(get_db)):
    return crud.course.create_course(db, payload)
# backend/app/routers/courses.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.services.course_service import CourseService
from pydantic import BaseModel

router = APIRouter(prefix="/api/courses", tags=["courses"])

class CourseOut(BaseModel):
    id: int
    name: str
    description: str | None

    model_config = {"from_attributes": True}

@router.get("", response_model=list[CourseOut])
def list_courses(db: Session = Depends(get_db)):
    return CourseService().get_all_courses(db)
# backend/app/repositories/course_repository.py
from sqlalchemy import select
from sqlalchemy.orm import Session
from app.models.course import Course

class CourseRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self) -> list[Course]:
        return list(self.db.scalars(select(Course)).all())
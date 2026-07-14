# backend/app/services/course_service.py
from sqlalchemy.orm import Session
from app.repositories.course_repository import CourseRepository

class CourseService:
    def get_all_courses(self, db: Session):
        repo = CourseRepository(db)
        courses = repo.get_all()
        # business rule example: only expose non-empty names
        return [c for c in courses if c.name]
# backend/app/models/course.py
from sqlalchemy import Text
from sqlalchemy.orm import Mapped, mapped_column
from app.core.database import Base

class Course(Base):
    __tablename__ = "courses"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column("Course_Name", Text, nullable=False)
    description: Mapped[str | None] = mapped_column("Course_Description", Text)

    __table_args__ = {"mysql_charset": "utf8mb4", "mysql_collate": "utf8mb4_unicode_ci"}
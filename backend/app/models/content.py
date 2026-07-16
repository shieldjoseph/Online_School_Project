# backend/app/models/content.py
from sqlalchemy import Text
from sqlalchemy.orm import Mapped, mapped_column
from app.core.database import Base

class Content(Base):
    __tablename__ = "content"
    
    id: Mapped[int] = mapped_column(primary_key=True)
    icon: Mapped[str] = mapped_column("intro_icon", Text, nullable=False)
    title: Mapped[str] = mapped_column("intro_title", Text, nullable=False)
    description: Mapped[str | None] = mapped_column("intro_description", Text)

    __table_args__ = {"mysql_charset": "utf8mb4", "mysql_collate": "utf8mb4_unicode_ci"}
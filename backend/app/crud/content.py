from sqlalchemy import select
from sqlalchemy.orm import Session
from app.models.content import Content

def get_content(db: Session) -> list[Content]:
    return list(db.scalars(select(Content)).all())
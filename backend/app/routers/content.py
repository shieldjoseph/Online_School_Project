from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.content import ContentOut
from app import crud

router = APIRouter(prefix="/api/content", tags=["content"])

@router.get("", response_model=list[ContentOut])
def list_courses(db: Session = Depends(get_db)):
    return crud.content.get_content(db)
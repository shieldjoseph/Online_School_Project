from pydantic import BaseModel

class CourseCreate(BaseModel):
    name: str
    description: str | None = None

class CourseOut(BaseModel):
    id: int
    name: str
    description: str | None

    model_config = {"from_attributes": True}
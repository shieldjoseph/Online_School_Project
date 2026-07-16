from pydantic import BaseModel

class ContentOut(BaseModel):
    id: int
    icon: str
    title: str
    description: str | None

    model_config = {"from_attributes": True}
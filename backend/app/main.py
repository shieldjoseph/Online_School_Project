from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.database import Base, engine
from app.routers import courses

Base.metadata.create_all(bind=engine)  # or use migrations later

app = FastAPI(title="Online School API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://192.168.133.107:5713",
        "http://localhost:5173",
    ],  # Vite default
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(courses.router)
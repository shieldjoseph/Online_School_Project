import axios from 'axios';

const api = axios.create({
	baseURL: 'http://192.168.133.107:8000',
});

export async function getCourses() {
	const { data } = await api.get('/api/courses');
	return data;
}

export async function getCourse(id) {
	const { data } = await api.get(`/api/courses/${id}`);
	return data;
}

export async function createCourse(course) {
	const { data } = await api.post('/api/courses', course);
	return data;
}
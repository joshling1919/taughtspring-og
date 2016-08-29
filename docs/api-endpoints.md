# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Sections

- `GET /api/sections`
- `POST /api/sections`
- `GET /api/sections/:id`
- `PATCH /api/sections/:id`
- `DELETE /api/sections/:id`

### Lessons

- `GET /api/lessons`
- `POST /api/lessons`
- `GET /api/lessons/:id`
- `DELETE /api/lessons/:id`
- `GET /api/lessons/:id/sections`
  - index of all sections for a lesson

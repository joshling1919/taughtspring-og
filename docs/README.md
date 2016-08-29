# Taught

[Heroku link][heroku]

[heroku]: http://www.heroku.com

## Minimum Viable Product

Taught is a web application inspired by Instructables built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Lessons
- [ ] Sections
- [ ] Adding photos and videos to lessons
- [ ] Searching for lessons by keywords

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day)

**Objective:** Functioning rails project with front-end Authentication

- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Lessons Model, API, and components (2 days)

**Objective:** Lessons can be created, read, edited and destroyed through
the API.

- [ ] `Lesson` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for lessons (`LessonController`)
- [ ] JBuilder views for lessons
- Lesson components and respective Redux loops
  - [ ] `LessonIndex`
  - [ ] `LessonIndexItem`
  - [ ] `LessonForm`
- [ ] Autosave lesson feature
- [ ] Style lessons components
- [ ] Seed lessons

### Phase 3: Sections (2 day)

**Objective:** Sections belong to Lessons that can be created, read, edited and destroyed through the API.

- [ ] `Section` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for sections (`SectionsController`)
- [ ] JBuilder views for sections
- [ ] Adding sections requires a lesson
- [ ] Style section components
- [ ] Seed sections

### Phase 4: Search (1 days)

**Objective:** Add search functionality- lessons are tagged according to subject and grade

- [ ] Fetching lessons based on subjects and grade level
- [ ] Fetching lessons based on keywords
- [ ] Populate search results in lessons index
- [ ] Implementing api that queries for every text input on search bar
- [ ] Style search & subject/grade components

### Phase 5: User (2 day)

**objective:** Add user functionality- users can add comments, reply to comments, and favorite lessons

- [ ] Add comment model.
- [ ] Add favorites model
- [ ] Comment and favorite components
- [ ] Add styling to comments and favorites

### Phase 6: - Styling (1 day)

**objective:** App should be presented well across different sized windows

- [ ] Ensure that all of the elements fit well together
- [ ] Test out app on different sized windows
- [ ] Style color scheme


### Bonus Features (TBD)
- [ ] Lessons organized by folders
- [ ] Adding comments and favorites to lessons
- [ ] Infinite page scroll
- [ ] Tags by common core standards
- [ ] Being able to download lesson plans into pdf/word format

# Redux Structure

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Section Cycles

### Section API Request Actions

* `fetchAllSections`
  0. invoked from `SectionsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/sections` is called.
  0. `receiveAllSections` is set as the success callback.

* `createSection`
  0. invoked from new section button `onClick`
  0. `POST /api/sections` is called.
  0. `receiveSingleSection` is set as the success callback.


* `updateSection`
  0. invoked from `SectionForm` `onSubmit`
  0. `POST /api/sections` is called.
  0. `receiveSingleSection` is set as the success callback.

* `destroySection`
  0. invoked from delete section button `onClick`
  0. `DELETE /api/sections/:id` is called.
  0. `removeSection` is set as the success callback.

### Sections API Response Actions

* `receiveAllSections`
  0. invoked from an API callback
  0. the `SectionReducer` updates `sections` in the application's state.

* `receiveSingleSection`
  0. invoked from an API callback
  0. the `SectionReducer` updates `sections[id]` in the application's state.

* `removeSection`
  0. invoked from an API callback
  0. the `SectionReducer` removes `sections[id]` from the application's state.

## Lesson Cycles

### Lessons API Request Actions

* `fetchAllLessons`
  0. invoked from `LessonsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/lessons` is called.
  0. `receiveAllLessons` is set as the success callback.

* `createLesson`
  0. invoked from new lesson button `onClick`
  0. `POST /api/lessons` is called.
  0. `receiveSingleLesson` is set as the callback.

* `fetchSingleLesson`
  0. invoked from `LessonDetail` `didMount`/`willReceiveProps`
  0. `GET /api/lessons/:id` is called.
  0. `receiveSingleLesson` is set as the success callback.

* `updateLesson`
  0. invoked from `LessonForm` `onSubmit`
  0. `POST /api/lessons` is called.
  0. `receiveSingleLesson` is set as the success callback.

* `destroyLesson`
  0. invoked from delete lesson button `onClick`
  0. `DELETE /api/lessons/:id` is called.
  0. `removeLesson` is set as the success callback.

### Lessons API Response Actions

* `receiveAllLessons`
  0. invoked from an API callback.
  0. The `Lesson` reducer updates `lessons` in the application's state.

* `receiveSingleLesson`
  0. invoked from an API callback.
  0. The `Lesson` reducer updates `lessons[id]` in the application's state.

* `removeLesson`
  0. invoked from an API callback.
  0. The `Lesson` reducer removes `lessons[id]` from the application's state.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `LessonSearchBar` `onChange` when there is text
  0. `GET /api/lessons` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

* `removeSearchSuggestions`
  0. invoked from `LessonSearchBar` `onChange` when empty
  0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.

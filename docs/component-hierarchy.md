## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Search
 - LessonIndex

**Search**

 **LessonIndex**
 - LessonIndexItem
 + LessonDetail
 * Section

 **LessonContainer**
 - SectionsIndex

**SectionContainer**
 - Section
 - Resource

**SearchResultsContainer**
 - Search
 - LessonIndex

**NewSectionContainer**
 - NewSection
  - NewSectionButton
  - SectionForm

**NewLesson**
 - NewLessonForm
   - DeleteButton
   - SaveButton
   - UploadButton

**LessonSearch**
 + AutoSearch
 * AutoSearchResults


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/lesson/:lessonId" | "LessonsContainer" |
| "/home/lesson/:lessonId/section/:sectionId" | "SectionContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-section" | "NewSectionContainer" |
| "/search" | "Search" |
| "/new-lesson" | "NewLesson" |
| "/lesson-search" | "NotebookSearch" |

```json
{
  currentUser: {
    id: 1,
    username: "joshling1919",
    favorites: 300,
    views: 35
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createLesson: {errors: ["must have objective!"]},
    createSection: {errors: ["Please put a title!"]}
  },
  lessonSections: {
    1: {
      title: "Engagement",
      estimatedTime: 30,
      description: "1. Have students pick up flashcards as they walk in\n
                    2. In groups, students will sort flashcards",
      CFUs: "1. Q: How are we arranging these flashcards?\n
                A: We're arranging by matching definitions with terms.",
      misconceptions: "Students may mix up definition of rational numbers and integers",
      description: "1. Have students pick up flashcards as they walk in\n
                    2. In groups, students will sort flashcards",
      author_id: 1,
      lesson_id: 1,
      resources: {
        1: {
          id: 1,
          type: "jpg",
          file: "flashcards.jpg"
        }
      }
    }
  },
  lessons: {
    1: {
      title: "Redux",
      estimatedTime: 90,
      author_id: 1,
      subject: "Math",
      gradeLevel: "8th",
      lessonDate: "9/25/16",
      lessonCreated: "8/24/16"
      objective: "SWBAT add and subtract with positive and negative rational numbers",
      keypoints: "1. Rational numbers are numbers that can be written as a ratio\n
                  2. To add negative numbers, if signs are different, subtract and take
                  the sign of highest number\n
                  3. If signs are the same, add, and keep the signs of the two numbers."
    }
  }
}
```

#TaughtSpring

[Live Link][taughtspring]

[taughtspring]: www.taughtspring.com



TaughtSpring is a single-page, full-stack web application that provides teachers with a simple interface to create, upload, and find lesson plans. Inspired by Instructables, it is built on Rails on the back end and a React-Redux framework on the front end.

##Features and Implementation

###Open Access
Lesson plans on TaughtSpring are accessible to anyone, whether or not they are logged in. TaughtSpring was designed in this manner based on a desire for a more collaborative culture in teaching, which would not only benefit teachers, but also the students.

Users can navigate through the majority of the site without being logged in, but in order to create and edit lessons, users must have an account. Modals were used to prevent the page from having to redirect back to the home page if a user logged in while reading a lesson plan or looking through a user's profile page.


![Login Modal](./docs/pictures/login.png?raw=true "Login")

###Creating Lessons
When creating lessons, teachers need a platform that allows them to be organized with the several components that go into a lesson. At the same time, because lesson plans can be written in so many different formats, (ie. "The 5 E's", "I Do, We Do, You Do", Flipped Classroom, etc. ), the forms that teacher use to write lessons must be dynamic and easily customizable.

Tabs were used to present an organized, yet customizable, form to create lessons on. Teachers are able to add as many sections as they need for their lesson, and within the section, they are also able to write down as many questions as they need to ask during that section of the lesson.

In the backend, users have many lessons, lessons have many objectives, key points, and sections, while sections have many "Checks For Understandings"(which are comprised of a question and an answer) and potential misconceptions.

In order to implement this, all of the data was held in the internal state of React parent component so that data is not lost when switching between tabs. When the teacher is ready to submit the lesson, a single AJAX request is made to the backend to create the lesson.

###Editing Lessons
Holding the entire lesson object in internal state became more challenging when it was time to parse the nested information out of the lesson object. For example, since misconceptions are held in an array, which belongs to an array of sections, which then belongs to the parent lesson, when it was time to update the state for one of the misconceptions, several pieces of information, such
as its index in its array, as well as the index of its parent section, had to be used to parse and update the information.

On the backend, fortunately, Rails allows for parent models to accept nested attributes. One interesting obstacle that presented itself was how to account for child objects that have been deleted by the user in the front end during an editing session. More specifically, Rails' update methods takes care of new objects that were just added if those objects don't have an id attribute. However, if the backend sent out a lesson that had sections, which the user deletes on the front end, then when calling update on that model, Rail will just not touch the object since it is not a part of the overall lesson object being sent back.

To tackle this issue, I gave each subcomponent its own specific array that pushed in its id whenever it was destroyed on the front end. Then, on the backend, I iterated through those arrays to destroy records of those objects.

###Search
There are currently two ways for users to search for lessons. The first is through the search bar, which matches based on lesson titles and subjects. The second is through the subject dropdown, which filters based on subject and grade level.

##Moving Forward

Because this application was built in a little less than two weeks, there are still some key features to improve on, including:

###Pagination of lessons index
Currently, the home page grabs every single existing lesson. As more lessons continue to be added to the site, pagination would help enhance the performance, while maintaining clean organization.

###Ability to comment on lessons and follow other users
This would be useful in helping to promote a community of collaborators.

###Auto Saving Lesson Drafts
Since the lesson does not send anything to the back end until it is complete, any accidental clicks on the back button could cost the teacher hours of work.

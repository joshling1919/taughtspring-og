
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
emails = %w(guest@gmail.com bb@gmail.com cc@gmail.com dd@gmail.com ee@gmail.com
ff@gmail.com gg@gmail.com hh@gmail.com ii@gmail.com jj@gmail.com)
user_ids = (1..10).to_a

images= %w(https://i.ytimg.com/vi/loXDVGi_lK0/maxresdefault.jpg
http://67.media.tumblr.com/tumblr_mcm7l1jaw61rd81evo1_1280.jpg
http://creativedesignmagazine.com/wp-content/uploads/2011/07/science-fiction-wallpapers27.jpg
http://assets.worldwildlife.org/photos/1102/images/story_full_width/Gorillas_7.31.2012_Our_closest_cousins_HI_105193.jpg?1345537507
http://www.dailydoseofcolor.com/uploads/2/3/2/5/23254662/6462024_orig.png
http://www.bl.uk/learning/images/Campaign_MAI/newimages/historicalcampaigns.jpg
http://www.siskelfilmcenter.org/sites/default/files/lastmanonthemoon01_0.jpg
http://www.history.com/images/media/video/history_mayflower_deconstructed_sf_1161013/History_Mayflower_Deconstructed_SF_still_624x352.jpg
http://d1jrw5jterzxwu.cloudfront.net/sites/default/files/article_media/chief_joseph.jpg
http://blog.eternalvigilance.me/wp-content/uploads/2013/07/The-story-of-Chess-%E2%80%93-Povestea-jocului-de-sah-1.jpg)
10.times do |i|
  User.create!(
    first_name: %w(Guest Maria Erin Jamie Seth Wilson Kelly Amanda Martha Kelsey)[i],
    last_name: %w(User Laws Greenwood Kwan Wright Ashby Emery Easton Tallent Craig)[i],
    email: emails[i],
    password: "password",
    subject: ["Math", "Math", "Other", "Math", "English", "Social Studies",
      "English", "Math", "Science", "Social Studies"][i],
    grade: [8, 6, 6, 8, 7, 8, 6, 6, 8, 7][i],
    bio: ["I love teaching!", "I've been a teacher for over 5 years.",
      "Teaching is my passion"].sample
  )

  Lesson.create!(
    user_id: user_ids[i],
    title: ["Our Galaxy", "Mitosis", "Gravity", "Taxonomy",
    "Pi is Delicious", "Suffrage, not Suffering", "First Man on the Moon",
    "The Mayflower", "Native Americans", "The Power of Exponential Growth"][i],
    subject: ["Other", "Science", "Science", "Science", "Math", "Social Studies",
    "English", "English", "Social Studies", "Math"][i],
    grade: [6,7,8].sample,
    lesson_date: Date.new(2016,11,3),
    image_url: images[i]
  )

end

lesson_ids = []

(1..10).each do |i|
  lesson_ids << i
  lesson_ids << i
end

descriptions= ["Students will learn that our galaxy is immense, and we are just a small part of it.",
"Students will understand that our planet is part of the solar system.",
"SWBAT articulate the different stages of mitosis",
"SWBAT define what mitosis is",
"Objective of this lesson is for students to provide examples of gravity in our lives",
"Students will also be introduced to the standard gravity value",
"SWBAT define taxonomy.",
"SWBAT articulate the different classifications of taxonomy.",
"By the end of this lesson, students will know the value of PI",
"Students will understand when to use PI",
"SWBAT define suffrage.",
"Students will write a critical analysis of the suffrage movement",
"SWBAT explain the historical context for sending the first man to the moon.",
"SWBAT remember all of the key figures involved in the mission.",
"SWBAT understand the rationale behind the pilgrim's migration",
"Students will know the historical account behind the pilgrim's first years in America",
"After this lesson, students will have a better understanding about the mistreatment of the Native Americans",
"Students will learn about The Trail of Tears",
"SWBAT to solve basic exponent problems",
"SWBAT apply basic exponents to real life exampless"]

kps= ["Depending on who you talk to, the solar system either has 8 or 9 planets",
"Our solar system is located in the galaxy of th Milky Way",
"Mitosis is a part of the cell cycle",
"Mitosis is when chromosomes separate into two identical sets of chromosomes",
"The value of gravity, denoted g, is g = 9.80665 m/s2 (32.1740 ft/s2).",
"The value of gravity is different on different planets.",
"Taxonomy is the branch of science concerned with the classification of organisms",
"The top three levels are domains, kingdoms, and phylum",
"PI, rounded to the nearest hundredths, is 3.14.",
"PI is often used for the calculation of the area of circles.",
"The 19th Amendment, which marked a major victory for the Suffrage Movement, became a part of the constitution in 1920",
"Susan B. Anthony was one of the key leaders of the movement.",
"Neil Armstrong and Buzz Aldrin landed on the moon on July 20, 1969.",
"The event was set in the context of the Cold War.",
"Pilgrims left their homes for the 'New World' due to religious persecution.",
"Pilgrims landed on Plymouth Rock.",
"The Trail of Tears followed the Indian Removal Act of 1830.",
"This ethnic cleansing occured under the presidency of Andrew Jackson.",
"Exponents show how many times a number (the base) is multiplied by itself.",
"If the exponent is 3, then the base is multiplied by itself 3 times."]

20.times do |index|
  Objective.create!(
  lesson_id: lesson_ids[index],
  description: descriptions[index]
  )

  KeyPoint.create!(
  lesson_id: lesson_ids[index],
  point: kps[index]
  )

end

#1
Section.create!(
  lesson_id: 1,
  name: "Hook",
  description: "Show students video of Milky Way from this video: https://www.youtube.com/watch?v=qnYCpQyRp-4.\n Then, students will discuss the size of the earth compared to the size of the Milky Way",

)

Misconception.create!(
  section_id: 1,
  misconception: "Students may not fully understand how large our galaxy truly is."
)

Cfu.create!(
  section_id: 1,
  question: "none",
  answer: "none"
)

#2
Section.create!(
  lesson_id: 1,
  name: "Intro to New Material",
  description: "In this section cover these key topics:
  1. Earth is part of the Solar System.
  2. The Solar System is .0032% the size of the Milky Way.
  3. It would take 100,000 years to cross the Milky Way at the speed of light."
)

#3
Section.create!(
  lesson_id: 1,
  name: "Guided Practice",
  description: "Pass out the solar system worksheet and have students follow these directions:
  1. First identify where earth is.
  2. Then, label the other planets."
)

#4
Section.create!(
  lesson_id: 1,
  name: "Independent Practice",
  description: "Students will use the materials provided to construct the solar system. Students will also write down how many moons each planet has."
)

#5
Section.create!(
  lesson_id: 1,
  name: "Assessment",
  description: "Students will take the exit ticket on the solar system and the Milky Way."
)

#6
Section.create!(
  lesson_id: 2,
  name: "Reviewing Concepts",
  description: "1.  Lead students through the mitosis hand dance to review the basic phases of mitosis.  Tell students that so far we have only looked at diagrams of the process and that today it is time to look at the real thing under the microscope.

2.  Tell students that before we go to the microscopes, we need to spend a little time investigating what to expect when we look at our prepared slides of mitosis in an onion root tip.

3.  Pass out the mitosis flash cards to each pair of students.  Ask them to work together to find examples of each of the phases of the cell cycle:  interphase, prophase, metaphase, anaphase, telophase.  As students discuss and locate each phase, circulate and support students who are having trouble focusing on all of those little purple dots.  Reassure them that this is normal and that it will get better the more we work with them.

Note: These cards are available for purchase through any science supply house, I used Ward's Science for this set.  The students and I continue to refer to them throughout the rest of the unit to ask questions, make comparisons, or quiz one another about our knowledge.
4.  Using the spokesperson protocol, ask student groups to discuss the following two prompts:

Which phase was the easiest to identify?

Which phase was the most challenging to find?

5.  Share out student answers.  Students will agree that anaphase and metaphase are the easiest to find (with some exceptions due to exceptionally challenging individual cell examples they encountered on their specific card).  They will typically say it was hard to find telophase and that the difference between prophase and interphase was also hard.

Note: Your responses to these questions can be brief at this point. They will mean more and students will be more invested in listening to your tips and tricks once they are at the microscope.  In general, students should assume that they have misidentified some of their telophases as interphase because they do and should look similarly. The key identifier to use is cell size, cells that have recently gone through telophase tend to be smaller with their nuclei not quite in the center. The major difference between the look of prophase and interphase is the state of the nuclear membrane.  Because the membrane is intact during interphase, the nucleus looks like a solid block of consistent color.  It is only when the nuclear membrane starts to break down during prophase that chromosomes start to show as dark streaks on the slide/photograph.
6.  Ask students to share any additional questions that they are curious about now that they have looked closely at the mitotic stages photos.

Note: The most typical things that students are curious about it why cells in the same phase don't all look the same.  Remind students that the word phase means that changes are gradual and there is a range for each phase.  I use the analogy of a light switch vs. a dimmer switch.
7.  Remind students that in addition to their textbook and notes, they can refer  to our cell division unit slide presentation for additional support throughout the unit."
)

#7
Section.create!(
  lesson_id: 2,
  name: "Getting Started",
  description: "1.  Pass out the mitosis lab document and tell students that now they will be working with their microscopes.

2.  Tell students that they will find a a labeled microscope diagram and a short list of basic directions for use on each of their lab tables in case they need reminders about best practices using microscopes.   The cell lab directions document from the previous unit also has a nice summary of steps to follow to focus the microscope for the best viewing.

3.  Prior to asking students to go to their lab tables with their partners, go through a few tips and tricks:

Students will need front loading/support from you in terms of how to view the slides.  Tell students that dividing cells will be close to the root tip and that each of their slides has three individual root tips permanent cemented into the slide.  Encourage them to pick up their slide to view it before putting it on the microscope stage so that they have an idea of where the best place is to focus on for maximum cell numbers.
Students will not know what the term 'field of view' means in relation to microscope work.  Draw a circle on the board and tell them it represents what they see under the microscope.  When they are asked to draw their field of view, it means everything in that circle, not just one single cell chosen by the student.
Remind students that all microscope drawings must be labeled, in color, and indicate the level of magnification used.
3.  Tell students that in each lab pair, one member will look at their field of view to identify phases while the other records their data.  For the second field of view, they partners will switch roles.

Note: This protocol allows students to work together and stay engaged as a team rather than having one person try to do everything while the other one relaxes until it is their turn to count.  It also encourages student teams to check in with each other when they are unsure about the phase that they are viewing through their microscope objective.
4.  Once you have gone through these discussion points in preparation for the lab, point out where colored pencils and microscopes are stored in the classroom and tell each partner to go get one of those two things to bring back to their lab table.  Show students where they can find their onion root tip slide and lens paper to clean the microscope.

5. Onion root tip mitosis slides are available through any science supply house.  I bought these slides through Ward's Science."
)

#8
Section.create!(
  lesson_id: 2,
  name: "Working with the Mitosis Onion Root Tip Slides",
  description: "1.  As students begin to work, circulate and observe student groups.  Remind students that their mitosis flash cards and the board drawings can help them make their assessments of the phases that they see in their field of view.

2.  At this point in the year, students will not need your immediate intervention. Most of the time, students will come to you to confirm what they are seeing in their field of view or to ask you a general question about the phases using their flashcards or photos they have taken of their field of view using their cell phones.

3. Check out our students working hard to identify the phases of the cell cycle! I chose these photos because they give a good sense of the engagement level of students.  Specifically this year when I added the option of using personal devices to take photos of what they see under the microscope, you will see strong partner work as teams focused their microscopes and used their cell phones to take micrographs of their field of view for further discussion and collaboration.  When I see these photos, I see a significant amount of on task and deeply focused work going on directed entirely by the students themselves."
)

#9
Section.create!(
  lesson_id: 3,
  name: "Engage",
  description: "Why you look so tired? Gravity pulling you down? This investigation prompts students to find the scientific relationship and distinguish between causal and correlational relationships (SP4) between mass and weight by using measurements and applying mathematical processes to the scientific question (SP5): what is the acceleration of gravity on Earth? This question addresses the core disciplinary idea: construct and present arguments using evidence to support the claim that gravitational interactions are attractive and depend on the masses of interacting objects (MS-PS2-4). Students conduct this investigation to produce data to serve as the basis for evidence that meet that goal (SP3) and construct explanations that include qualitative or quantitative relationships between variables that describe phenomena using models or representations (SP6).

During this investigation, students access the scale, proportion and quantity cross-cutting concept by using algebraic expressions and equations (CCC) to when measuring and calculating weight. This lesson links physics to chemistry by exposing how forces interact with matter - and that properties of matter (like mass) have an effect on the magnitude of those forces (MS-PS1-2).

This lesson presupposes students have background knowledge about mass (Measurement: Mass) and forces (Measurement: Forces). It can be used in conjunction with a related lesson too: Mass Versus Weight: Travel to Other Planets. This lesson gives students additional exposure to gravity.

In order to ENGAGE students in this lesson, ask students to make a prediction:

What happens if you drop a feather and a hammer at the same time?

In order to spur their thinking even more, these questions might help them dig deeper:

Does it matter if there is no air where the objects are dropped?

Does less gravity on the planet where the objects are dropped affect their falling rate?

Do objects always fall down?

Students view Hammer vs Feather - Physics on the Moon with the purpose of making observations to support or refute their prediction.


Using a turn and talk strategy, students work with a neighbor to develop an explanation using the evidence seen in the video. Prompt students to include reasoning about why the phenomena of objects falling at the same rate occur. If students aren't convinced, which occurs often as this is a particularly sticky misconception, the Galileo Drops the Ball simulation helps students \"experiment\" with their ideas. If students are still wary, suggest that they will be able to prove this law mathematically in this investigation."
)

#10
Section.create!(
  lesson_id: 3,
  name: "Explore",
  description: "The EXPLORE stage of the lesson is to get students involved in the topic so that they start to build their own understanding. To help students explore how mass affects weigh, students familiarize themselves with the variables by formulating the question they will answer in the investigation on the Weighed Down Investigation lab sheet:

How does mass affect the weight of objects?

Students complete a quick Background Research section of the investigation to stimulate prior knowledge regarding how to measure mass and weight. If students need reminders or revision of their understanding of mass and weight, the Mass and Weight Review Presentation and/or the Mass Versus Weight Research Notes are resources that can be used as a class or individual review.

Upon completion Background Research section, students move on to plan the rest of their investigation (Part 4). This investigation follows a linear and structured inquiry path (for more discussion of linear versus non-linear scientific inquiry, visit this lesson: Exploring Scientific Methods). Using this linear progression, students identify variables, safety concerns and review the procedure (which is provided). Students then perform experimental tests and collect data (Part 5 of Weighed Down Investigation lab sheet)."
)

#11
Section.create!(
  lesson_id: 3,
  name: "Explain",
  description: "The EXPLAIN stage provides students with an opportunity to communicate what they have learned so far and figure out what it means. This stage of the lesson presents a great place for a quick formative assessment.

To start, students create a coordinate graph, plotting the independent variable (the mass in kilograms.) on the horizontal axis and the dependent variable (the weight) on the vertical axis. For additional resources on coordinate graphing, this lesson may be helpful: Get in the Graph: Coordinate Graphing. The process of graphing this data helps students recognize that there is (or should be) a linear relationship between mass and weight. Showing students how to draw a \"line of best fit\" and explaining why a line of best fit is useful in this data set may be a nice support to aide the process of data analysis."
)

Cfu.create!(
  section_id: 11,
  question: "What does the graph tell you about the relationship between mass and weight on Earth?",
  answer: "The mass of an object is a measure of the object's inertial property, or the amount of matter it contains. The weight of an object is a measure of the force exerted on the object by gravity, or the force needed to support it."
)

Cfu.create!(
  section_id: 11,
  question: "What different factors affect the weight of objects?",
  answer: "The factors affecting the terminal speed of a falling object include: its mass. its surface area. the acceleration due to gravity, g."
)

#12
Section.create!(
  lesson_id: 3,
  name: "Extend",
  description: "The EXTEND stage allows students to apply new knowledge to a novel situation. There are several novel situations that extend student understanding of this concept:

1) At the end of the investigation, a short extension activity is provided:

The moon is about 1/6 the mass of the Earth.  What would the weights of your objects be on the moon?  Create a data table to show your data.

2) Gravity Force Lab - PhET Interactive Simulation. Students can manipulate variables to explore gravity between objects.

3) Mass Versus Weight: Travel to Other Planets - This is an investigation in which students compare the concepts of mass and weight to understand how these properties of matter are similar and different by calculating their weight on other planets."
)

#13
Section.create!(
  lesson_id: 3,
  name: "Evaluate",
  description: "The EVALUATION stage is for both students and teachers to determine how much learning and understanding has taken place.

In order to evaluate understanding, there are multiple methods:

1) A quick quiz: Measurement Mass versus Weight Checkout Quiz offers a glimpse into the \"remember\" and \"understand\" levels or knowledge (Bloom's Revised Taxonomy).

2) These resources can also be used as evaluation tools: Mass and Weight Quiz Retake or Mass and Weight Quiz Retake - Alternate.

3) Review of student work - Weighed Down Investigation Student Work - including the analysis questions at the end of the investigation, provides additional insight into students' abilities to explain what they have learned about mass and weight."
)

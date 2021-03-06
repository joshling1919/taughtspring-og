
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
    first_name: %w(Guest Maria Erin Sharon Andrea Andrea Kelly Amanda Martha Shaun)[i],
    last_name: %w(User Laws Greenwood Wilson Palmer Mills Emery Easton Tallent Errichiello)[i],
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
    subject: ["Other", "Science", "Science", "Science", "Math", "English",
    "Social Studies", "English", "Social Studies", "Math"][i],
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
"SWBAT: determine the central idea of a text and analyze its development between individuals, ideas, and events of the Pre-Colonial Time Period.",
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
"English Settlers vs. Native Americas: Assumptions Proven Factual",
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

#14
Section.create!(
  lesson_id: 4,
  name: "Warm Up",
  description: "Instruct students to engage in table talk for 2 minutes around this review question from the previous lesson, Classification, part 1.  This question requires students to activate prior knowledge and allows for an assessment of how much students know.  Walk around and listen to students’ comments to determine whether re-teaching is necessary.

Listen for students’ ability to identify that the two naming systems are similar in that they both created rationales for grouping organisms into categories.   If this is as much as they can identify, prompt students to dig a little deeper by asking questions like:

1. Which system is more detailed and why?
2. Why is Linnaeus’ system of classification still the basis of how we classify animals today and Aristotle’s is not?

End the warm-up by allowing each group to share one thought with the whole class.  The opportunity to share thoughts allows students to practice their language skills.

Explain that today’s lesson will allow students to examine in greater detail why Linnaeus’s naming system is universally accepted still today."
)

#15
Section.create!(
  lesson_id: 4,
  name: "Introduce New Material",
  description: "Inform students of the learning targets:

1. I can create and use a dichotomous key to classify an organism.
2. I can use the current classification system to name an unknown organism.

Instruct students to consider what actions would need to be taken to identify and name organisms that have never been seen before.

Look for students to explain that they would need to try to place in the organism in one of the six kingdoms and then name the organism. Ask students to name and describe the kingdoms.  This quick formative assessment will determine whether a review of the seven kingdoms and their characteristics is needed.  If so, take the time to conduct a quick review using the graphic organizer from Classification, part 1. Review of prior content allows for repetition, which is a great way to help students reinforce learning.

Explain that the scenario of having to name newly discovered species of organisms is not far-fetched. Share current information about recent, un-named species of organisms that had to be classified and named. Display images and share some of the more interesting webpages for organisms with names like:

Scaptia beyonceae- Point out the binomial nomenclature naming conventions. But, also point out that this particular organism was names, in part for its large golden butt as homage to Beyonce’.

Aleiodes gaga- Point out the correct binomial naming conventions. Point out that this wasp species is named in honor of Lady Gaga.

Gaga germanotta-  Point out the correct binomial naming convention. Share that 19 varieties of ferns are named after Lady Gaga, as well.

Check for understanding by asking students which part of each of the names reflects the genus and which part, the species. Look for students to be able to identify that the sequence matters; Genus is always first and the species name is second. Use the two organisms with “gaga” in the names to highlight this point. For the organism, Aleiodes gaga, gaga is the species.  While for the Gaga germanotta, Gaga is the species."
)

#16
Section.create!(
  lesson_id: 4,
  name: "Guided Practice",
  description: "Explain that students will practice their ability to classify and name organisms in a GRASPS activity.  Using a LCD projector, display and explain each part of a GRASPS performance task:

GOAL- Provide a statement of the task.

ROLE- Define the role of the students in the task.

AUDIENCE- Identify the target audience within the context of the scenario.

SITUATION- Set the context of the scenario.

PRODUCT- Clarify what the students will create and why they will create it.

STANDARD- Provide students with a clear picture of success.

Distribute copies of the Taxonomy GRASPS, “What on earth is that?”. Display the GRASPS assignment and preview each component of the GRASPS, allowing volunteer students to read each of the GRASPS components aloud to the class.

Display a GRASP example so that students will be able to see how each of the components are addressed in a completed GRASPS.  Make sure that students understand that this is an exemplar that shows what it is expected in the finished product.

Model how students will complete the Product using the first organism, photosynthetic sharks. Conduct a “think aloud” to allow students to observe your thought process in creating a name and identifying the kingdom for the shark.

Think Aloud Script Example:

'What are the seven kingdoms? This will help me to decide to which kingdom each of these organisms belongs.  Now, what kingdom can I place the shark in? I know sharks are typically animals because they are heterotrophs. But, this alien shark is different. I know this because the shark description says that it is photosynthetic and its fins have chlorophyll to convert sunlight to energy. Hmmm… let me look at my kingdom graphic organizer. I think the shark might belong to the plant kingdom because it uses photosynthesis as its nutrition source.

I know that binomial nomenclature naming requires the genus name followed by the species name. The genus is a larger grouping than species. Are there other fish that are autotrophs on this list of alien organisms? Yes. So, I need to create a genus for these autotrophic fish. I will call the genus, Photosynthetic because the name indicates that they are autotrophs, able to make their own food. Since the shark is different from the goldfish, they belong to different species. I will name the species sharkus. This organism is Photosynthetic sharkus.'

Remind students to refer to their notes from both the Classification, part 1 lesson and Classification, part 2 lesson for assistance."
)

#17
Section.create!(
  lesson_id: 4,
  name: "Independent Practice",
  description: "Distribute poster boards and markers for students’ use. Explain that the completed task involves 4 different artifacts:

1. Create a taxonomic scheme using only kingdom, phylum, genus, and species.
2. Create Latin-sounding names, for each organism. Include the genus and species classification.
3. Illustrate your interpretation of each organism's appearance.
4. Prepare a dichotomous key for these organisms. Show a brief clip on how to develop a dichotomous key. This review of dichotomous keys from the Classification, part 2 lesson should help ensure that all students are able to complete this component of the performance tasks.
Assign students to work in groups of four to complete the tasks. Take into account the specific learning abilities of students when creating the groups and strive to create groupings where lower ability students are integrated into groups of higher ability students. The assignment has four parts so that every learner can find an opportunity to contribute in a meaningful way.

Instruct students to determine within the group who will complete which part of the assignment. Encourage students to play to their strengths when deciding who will complete which tasks.

Walk around the room to monitor the groups as they work and ensure that all students are actively engaged in the completion of the tasks. Do not expect the groups to complete this assignment in one class period. It is likely that this assignment will require at least 2 class periods to complete.

Student work 1 and student work 2 represent exemplars for this assignment. While both show accurate use of the couplets to derive classification systems, student work 1 shows a higher level of thought given toward naming and drawing the organisms, with the students creating names like Toxicitic grasspolside and Photosynthous Fleaoid. "
)

#18
Section.create!(
  lesson_id: 4,
  name: "Close",
  description: "Display a PMI chart (Plus, Minus, Interesting).  Distribute post-it notes and ask students to list one of the following:

1. Plus- Something that I liked about this assignment.

2. Minus- Something that I did not like about this assignment.

3. Interesting- Something I found interesting while working on this assignment.

Typically, students will note that they like the creative aspects of naming and drawing the organisms. They do not tend to like the process of deriving the dichotomous key and many will note that they find the descriptions of the organisms to be interesting and fun.

Consider the students'  feedback, and as appropriate adjust the task to better meet the interest of future students. "
)

#19
Section.create!(
  lesson_id: 5,
  name: "Brain Pop Video: Circles",
  description: "Circles Video: http://www.brainpop.com/math/geometryandmeasurement/circles/

  I pause the video so that students can fill in their notes.  I do not show the entire video!  Students will be deriving the circumference formula later in the lesson, so I stop the video at 1:23 after Tim shares that the circumference is the perimeter of a circle, or the distance around it."
)

#20
Section.create!(
  lesson_id:5,
  name: "Calculating Diameter and Radius",
  description: "Now that students have been exposed to the definitions of radius and diameter, I want them to practice knowing one and finding the other. It helps students to draw what is given first, and then figure out the missing information."
)

    Misconception.create!(
      section_id: 20,
      misconception: "A common mistake is that students confuse diameter with radius and vice versa."
    )

#21
Section.create!(
  lesson_id: 5,
  name: "Exploring Circumference",
  description: "I have a volunteer read the directions.  I go over group expectations and what to do when they finish measuring an item.   I stress the importance of accurately measuring the items.  I suggest that group members check each other’s measurements to ensure accuracy.  Students will be engaging in MP6: Attend to precision and MP8: Look for and express regularity in repeated reasoning.

For this activity, I let the students choose their groups of 3-4.  I give them 30 seconds to pick their groups and sit down.  If they cannot handle that, then I will have students count off and sit down.  I have volunteers pass out materials and Group Work Rubric to each group.

While students are working, I walk around and monitor student progress and behavior.  When a group has measured five objects, I check in with them briefly and then have them move on to the graph.

Some students may struggle to make connections on question 3.  This is okay.  I want students to work together to see what they can figure out.  If a group asks for a calculator, I give them one to work with.

If a group completes the graph and questions, I ask them to explain what they noticed and their predictions for 3c and 3d.  If there is still time, the group can measure extra items and then plot the new measurements on the graph.

With about seven minutes left, I stop groups and have them come together for a class discussion.  I ask 2-3 volunteers from different groups to show their graphs under the document camera.  I ask, “What did your group notice?”  I want students to notice that the circumference of a circle is about 3 times bigger than a circle’s diameter.  I ask students to share their predictions to 3c and 3d and explain them."

)

#22
Section.create!(
  lesson_id: 5,
  name: "Brain Pop Video: Pi",
  description: "Pi Video: http://www.brainpop.com/math/numbersandoperations/pi/

I pause the video so that students can fill in their notes.  I do not show the entire video!  Students will be deriving the circumference formula next, so I stop the video at 1:15 after Tim shares that pi is an irrational number.

If I have time, I go to http://avoision.com/experiments/pi10k to show students what pi “sounds like” as a musical sequence."
)

#23
Section.create!(
  lesson_id: 5,
  name: "How?",
  description: "This will serve as the Closure for the lesson.  We go through these questions together as a class.   I want students to be able to explain that pi is the ratio of a circle’s circumference and its diameter.  I have students Think Pair Share about what they think the formula for circumference of a circle is.  Students are engaging in MP 8: Look for and express regularity in repeated reasoning.

Then I have students use their formula to answer 1 and 2.  For 1a, students can just put 8 times pi.  Rather than using 3.14 to calculate the circumference, I just want them to estimate.  If I have extra time, I give students problems with bigger (circumference of 150 cm) and smaller (diameter of 2.5 cm) measurements and have students make estimates of the diameter and circumference."
)

#24
Section.create!(
  lesson_id: 6,
  name: "Bell Ringer: Men vs. Women",
  description: "Are there other ways that students could describe the inequalities around men and women voting rights of our past histories? To continue our understanding of women's suffrage, I ask students to respond to the following prompt on the whiteboard

According to Sojourner Truth, how does she view men and women?

Students will use their prior knowledge and speech by Sojourner Truth to gather answers for their warm-up. We will share samples prior to moving on to the next activity.

Link to Sojourner Truth Speech: http://sourcebooks.fordham.edu/mod/sojtruth-woman.asp"
)

#25
Section.create!(
  lesson_id: 6,
  name: "Guided Practice",
  description: "With a focus for understanding voting through text, we will re-read Ain't I a Woman annotating for the use of literary elements. What students will focus on is the use of dialect, imagery, and allusions to see how these elements impact the overall tone and theme of the selection. I will model how to annotate the first paragraph aloud. Then students will finish annotating in pairs. Finally, we will reconnect as a class to go over all elements found in the speech."
)

#26
Section.create!(
  lesson_id: 6,
  name: "Independent Practice",
  description: "  To see if suffrage has improved over the past 100 years, students will work in pairs to complete the One Hundred Years toward Suffrage handout. I allow students to select their partner since the comprehension of the information must be shared among each pair. Once students have found a location in the classroom, I divide all of the dates on the timeline by fours. Each pair is responsible for reading their assigned dates and answering the following questions:


  1. Who would they consider a risk taker in their section?


  2. What risks did they take?


  3. How did the move the women’s movement forward?


  4. How were these risk takers blocked? (If they were.)"
)

#27
Section.create!(
  lesson_id: 7,
  name: "Setting the Stage",
  description: "On this day, July 20, 1969, at 4:17:40 p.m. Eastern Daylight Time the following words were heard around the world: “Houston, Tranquility Base here.  The Eagle has landed.”  Electricity was in the air, the control room at the Cape was breathless; then pandemonium erupted as the world realized what had just taken place — something only envisioned by novelists — a man had landed on the moon!"
)

#28
Section.create!(
  lesson_id: 7,
  name: "Equipment",
  description: "The rocket was named the Saturn V. Sitting on the launch pad it was 364 feet tall and 33 feet in diameter, the tallest rocket vehicle ever launched. When fueled it weighed in at 6.5 million pounds, the heaviest ever launched. It could lift a payload of 260,000 pounds into low earth orbit, the largest payload ever launched. These three records stand to this day.

The Saturn V consisted of three stages with the first weighing in at 5.1 million pounds when fueled. The purpose of the first stage was to lift the launch vehicle through the first 220,000 feet of ascent before being jettisoned. The first stage, built by the Boeing ompany, developed 7.5 million pounds of thrust when the five F-1 engines were ignited.

Stage two, weighing slightly over a million pounds, then ignited its five J-2 engines and carried the rest of the vehicle through the earth’s upper atmosphere, at which point its engines burned out and were jettisoned. This stage of the rocket was developed by North American Aviation.

Stage three, built by Douglas Aircraft Company, was then used for the orbit insertion engine burn to enter into an orbit around the earth, and then again for the translunar insertion burn to send the crew on its way to the moon. Once stage three was jettisoned all that would remain of the spacecraft would be the Command Service Module (CSM) built by North American Aviation, and the Lunar Module (LM) — code-named Eagle — built by Grumman.  In reality, the CSM consisted of two pieces — the Command Module (CM) containing the three-man crew, and the Service Module (SM), which provided power, support systems, and the engine required by the CM to enter and leave the moon’s orbit."
)

#29
Section.create!(
  lesson_id: 7,
  name: "The Mission",
  description: "On July 16, 1969, the gigantic Saturn V rocket sat on launch pad 39A at the Kennedy Space Center in Florida. In just seconds the three-man crew of Apollo 11 — Commander Neil Armstrong, Lunar Module pilot Edwin E. “Buzz” Aldrin Jr. and Command Module pilot Michael Collins — would be on their way to making history. All three astronauts were veterans of other space flight missions. The mission of this space flight was to put the first man on the moon, a goal set by President John F. Kennedy on May 25, 1961. At 9:32 a.m. EDT, the five enormous F-1 engines on the Saturn V ignited, and the astronauts were on their way with Mission Control in Houston, Texas, orchestrating the mission."
)

#30
Section.create!(
  lesson_id: 7,
  name: "Descent",
  description: "MISSION CONTROL:

-“Sixty seconds.” (the fuel remaining)

EAGLE:

(No response.)

MISSION CONTROL:

-“Stand by for thirty seconds, thirty seconds.”

EAGLE:

(Nothing; all was quiet.)

ARMSTRONG:

-“Forty feet, picking up some dust.  Thirty feet, seeing a shadow.”

MISSION CONTROL:

-“Fifteen sec….” (The sentence remained uncompleted.)

(After a long pause, one of the 67-inch probes hanging from the Eagle’s footpads touched the surface.)

ALDRIN:

-“Contact light!”

(Three seconds later:)

-“Shutdown.”

-“Okay. Engine Stop, ACA—out of detent.”

ARMSTRONG:

-“Out of detent.”

ALDRIN:

-“Mode control—both auto. Descent command engine override—off. Engine arm—off.”

-“413 is in.”

DUKE IN MISSION CONTROL:

-“We copy you down, Eagle.”

ARMSTRONG:

-“Houston, Tranquility Base here. The Eagle has landed.”"
)

#31
Section.create!(
  lesson_id: 7,
  name: "Giant Leap",
  description: "Of course, six hours after landing, Neil Armstrong would be the first man to set foot on the moon, uttering the immortal words, “That’s one small step for [a] man, one giant leap for mankind.” The entire crew safely returned home July 24th."
)

#32
Section.create!(
  lesson_id: 8,
  name: "Intro",
  description: "Since this unit focuses on the comprehension of informational text, I chose to incorporate a strategy that will aid students in working through steps to “control information” housed in the historical documents. Students must understand that reading done in this class will involve a strategy that allows them to talk to the text while evaluating the assumptions made by authors to influence readers’ perceptions about events, individuals, etc. Today’s lesson is designed to introduce students to this process then indulge them in practicing the strategy with two pieces of informational text on William Bradford and the Mayflower Compact."
)

#33
Section.create!(
  lesson_id: 8,
  name: "Bell Ringer",
  description: "I hook students into this lesson by having students list the processes they use when reading nonfiction text. Students will share their processes used as they are asked to read stories inside and outside the classroom. Responses from this activity might include: read the entire document, annotate the text, and skim the passage."
)

#34
Section.create!(
  lesson_id: 8,
  name: "First Read",
  description: "Since I want to bring to life the simplicity involved in processing information in literature, students will skim their article and highlight all ideas associated with a journey in Bradbury's Mayflower Compact.

Students will be given two separate texts to read about events that led in making America. Because this lesson is being taught to a gifted class, the assigning of text can be as simple as left and right / front and back of the classroom. I purposely chose for students to read different texts so that our  classroom discussion will encompass assumptions made from various perspectives and engage all students in adding new information about “how” America was made during the times of the English settlers and Native Americans."
)

#35
Section.create!(
  lesson_id: 8,
  name: "Comprehening the Text",
  description: "Students will be guided on how to use a three-step process to \"dig deeper\" into the meaning of informational text. Notes will be provided for students to copy in their notebooks. After note taking, students will use the steps on the historical document read earlier in the lesson.

This is my first time using this strategy to move students through comprehending informational text. I have selected this interaction with the text to be done cooperatively since literature provides room for interpretations that should be shared with others. Since there are varying levels of gifted students in the classroom, students are asked to work with their shoulder partner. The seating arrangement of students are homogeneous based on previous years' End-of-Grade scores so like-minded individuals are sitting together. Due to it being early in the school year, students have not established great rapport with each other. However, sitting them homogeneously will allow them to move simultaneously through the learning activities.

Teachers may wonder why students have yet to share the information read in the selection prior to moving into more a critical process of evaluating and analyzing information in the text. I want students to focus more on the questionable assumptions presented in each article and not the reading of information from the text. The level two and three of the strategy move students from being a reader to being a critic of literature. Once students understand the intended audience of each selection, then they will see its influence on how information was compiled for the selection. In addition, students take these understandings and question whether they can believe an article based on what is learned about its society, people, etc. I will wrap up this lesson by having students share what was discovered about the making of America from the assumptions posed in their readings."
)

#36
Section.create!(
  lesson_id: 8,
  name: "Exit Ticket",
  description: "Students will wrap-up this lesson by answering the following question:

How did the assumptions made by the authors of each article influence your thinking about the people involved in the expansion of America?

Because this an interdisciplinary unit based on Social Studies lessons, it is essential that students understand what influences informational literature and how information studied in both classes develops their understanding of nonfiction text and histories. This exit ticket evaluates students understanding of the tri-step process and if the second and third levels were needed to bridge gaps in comprehension of informational text.

Possible student answers included:

1. to ask more questions about the validity of the text
2. pay more attention to how the author formulates his bias towards a topic, etc.


It is important that a \"skill or concept\" drives the reading material and interaction that students have with learning activity of the day. I try to use a reading strategy to control the pacing of the lesson This helps keep students on task and supports high levels of engagement with each activity done throughout the lesson."
)

#37
Section.create!(
  lesson_id: 9,
  name: "Bell Ringer: Need a Definition",
  description: "What’s my perspective on the Trail of Tears? At the start of this lesson, students have been learning about the Trail of Tears through lessons in Social Studies class, a novel, and informational text. With information overload about the Cherokee Indian Removal, time has come for students to express their emotions about this historical event.

It is time to hook students! Students will answer the following prompt in their notebooks

 -In your own words, what does perspective mean?

The denotation of the word \“perspective\” is a particular attitude or point of view regarding something. Possible answers I expect to hear from students include new look on life, view point about something, ranges of opinion or scope of things, etc.

Students can look at the connotations of the word and use the associations of view, attitude, outlook, and sight to define how they will express their reaction to the Trail of Tears. It is important that students understand perspective so that it can bring their opinions about the Trail of Tears to alive."
)

#38
Section.create!(
  lesson_id: 9,
  name: "Building Knowledge about Trail of Tears",
  description: "There are many ways that students will begin to formulate a perspective about the Trail of Tears. In this The Trail of Tears - Robert Lindneux image (http://www.pbs.org/wgbh/aia/part4/4h1567b.html) students will look to the left, right, and middle of the photo to develop a list of emotions that are provoked by the still image. As students work, I will walk around the room to see what similarities and differences are seen among students' responses in their notebooks. This quick glance will allow me to call on certain students to share how they felt about the historical event of the photo.

Possible emotions students may record include sadness, compassion, sympathy, etc. I don't allow students time to share why certain emotions were chosen in this activity because I want students to interact with other resources to develop their lasting perspective of the Trail of Tears before they share."
)

#39
Section.create!(
  lesson_id: 9,
  name: "IP: Recording My Perspectives",
  description: "Students will work in groups to develop their final perspective on the Trail of Tears. In order to gain more information about this historic event, the following articles will be given for students to read: Gen. Scott's Address to Indians, Map of Trail,and Historical Background for Trail of Tears. While reading primary and secondary information, students will work through the length and challenging vocabulary to comprehend the claims of each speaker. I will serve as support for students who have questions about the information presented in each document.

It is important that students fill out the What, When, Where and Why organizer as they are reading each document. Because students are looking at longer lengths of text, the graphic organizer will serve as a visual to help students organize the most essential points in each document.

The final product that groups will develop is a perspective poster on their view of The Trail of Tears. Students will have one class period to read over the material and complete the graphic organizer. On the second day of class, students will follow the Poster Template to create a poster to present to their peers. Watch the Trail of Tears Perspective Poster to see how posters can be made by student groups in the classroom."
)

#40
Section.create!(
  lesson_id: 10,
  name: "Start Up",
  description: "We launch the investigation almost immediately and ask the class, \"can you change the world?\" We follow by showing the trailer for the movie Pay it Forward. The trailer shows a clear idea of what it means to \"pay it forward.\"

Youtube Link: https://www.youtube.com/watch?v=_pCtXRP1edo

After the clip shows, I would ask students to rephrase what it means to \"pay it forward\" and outline the discussion on the board.

Paying It Forward:

1. Help three people

2. Those three people help three other people

I would ask students to take 2 minutes and draw a visual of this process.

\"Imagine you tried this. What would you do? How much of an impact would it have. Write out three ideas you have to help others and draw a model that represents what happens if they pass it on and then the next group passes it again. How many people will you have impacted?\"

After they have had a chance to reflect, I ask students to share. I want them to use their mathematical model to make a social argument.

\"Would paying it forward make a difference? How do you know?\"

This is a discussion around would could happen and what students think would happen if they tried to pay it forward. This is not a debate with a correct or even predictable result, it is a chance to spend about 5 minutes sharing ideas around the concept of paying it forward. The more they talk about it, the more they will be ready to work on the math surrounding the concept."
)

#41
Section.create!(
  lesson_id: 10,
  name: "Investigation",
  description: "I like to give students plenty of room in this investigation, since I want them to find a way to naturally reach an exponential model. The question I ask is, \"Could paying it forward reach everyone in the world?\" Specifically, I will offer them two paying it forward models.

Model 1:  Help 3 and have those people help 3 others (like the movie)

Model 2:  Help 3 every day.

Optional Extensions:

Get a group of 1000 people together who will help 3 people each day. Is this a stronger model than the one in the movie. Why?

If you have a group of people willing to help 3 others each day, how large would the group need to be to reach everyone in the world in 21 days?

After I present the models and prompts, I ask students, \"What do you need to solve this problem?\" Students need to know how paying it forward works (which we discussed at the start) and the current world population. They also need to have a time frame for how long it takes to complete a \"good deed.\" This depends on what they consider acceptable as a \"good deed\" and what they consider to have an impact.

Does it count if you buy someone lunch?
Does it have to be something they can't do for themselves?
How loosely do we define \"helping someone out\"?
I provide all the tools needed to solve this problem. I give them the population number (displaying the link on the projector) and have a station with graph paper, graphing calculators, etc.

As I circulate, I will nudge students toward functions, graphs and tables, but only if they don't have another working algorithm. For example, if they really like drawing a tree to represent the growth of paying it forward, I would ask them to look at a smaller population before they approach the population of the entire world. I wouldn't discourage them from their algorithm, since the tree diagram will help them make sense of this problem in a way that is natural for them. "
)

#42
Section.create!(
  lesson_id: 10,
  name: "Summary",
  description: "During their investigation, I like to record ideas and quotes from the class. I start off the summary by sharing some of the more compeling student ideas and use these to launch a quick conversation. For example, a student might say, \"If everyone followed through, this wouldn't take long at all.\" I would ask the class if they agree and how they could know. Students would share their approaches in tables, graphs, functions, etc. We would discuss the equation y = 3^x with questions like, what does x represent? What does y represent? How does this connect to the columns in a table and the axis in a graph?

For students who graphed the function by hand, I would show their work, demo it on the graphing calculator and extend it by using Desmos and other online graphing calculators. I like to discuss the meaning of the intersection points and the reasoning as to why exponential growth is so much greater than linear growth.

I might do this by simply showing a multiplicative (exponential) vs. an additive (linear) model and comparing the slopes in the linear and exponential paying it forward models.

-exponential:

3

3x3

3x3x3



-linear:

3

3+3

3+3+3



With the graphs, tables and functions shared, I would ask students to summarize how they can recognize an exponential relationship. They could respond in a variety of ways, but I would quote students around the following ideas:

1. Linear functions make straight lines and exponential functions make \"curves\"

2. Exponential functions can grow a lot faster than exponential functions.

3. Linear functions have a constant rate of change or slope. Exponential functions do not

4. Linear functions look like y = mx + b and exponential functions look like y = a^x"
)

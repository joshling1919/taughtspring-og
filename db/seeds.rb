
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
    first_name: %w(Guest Ingrid Marie Jamie Seth Wilson Kelly Amanda Martha Kelsey)[i],
    last_name: %w(User Ang Fang Kwan Wright Ashby Emery Easton Tallent Craig)[i],
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

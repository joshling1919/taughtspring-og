
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
emails = %w(jl@gmail.com ia@gmail.com mf@gmail.com sw@gmail.com wa@gmail.com
ke@gmail.com w@gmail.com zz@gmail.com aa@gmail.com bb@gmail.com pp@gmail.com)

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
    first_name: %w(Josh Ingrid Marie Jamie Seth Wilson Kelly).sample,
    last_name: %w(Ling Ang Fang Kwan Wright Ashby Emery).sample,
    email: emails[i],
    password: "password",
    subject: %w(Math English Science Other).sample,
    grade: [6, 7, 8].sample,
    bio: "I love Math"
  )

  Lesson.create!(
    user_id: (1..10).to_a.sample,
    title: ["Our Galaxy", "Mitosis", "Gravity", "Taxonomy",
    "Pi is Delicious", "Suffrage, not Suffering", "First Man on the Moon",
    "The Mayflower", "Native Americans", "The Power of Exponential Growth"][i],
    subject: %w(Math English Science Other).sample,
    grade: [6,7,8].sample,
    lesson_date: Date.new(2016,11,3),
    image_url: images[i]
  )
end

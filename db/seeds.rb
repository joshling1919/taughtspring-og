
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

emails = %w(jl@gmail.com ia@gmail.com mf@gmail.com sw@gmail.com wa@gmail.com
ke@gmail.com w@gmail.com zz@gmail.com aa@gmail.com bb@gmail.com pp@gmail.com)

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
    title: ["Integers", "Constitution", "Fractions", "Atoms",
    "Culture Building", "Shakespeare", "Wuthering Heights",
    "Decimals", "Mental Math", "Prepositions"][i],
    subject: %w(Math English Science Other).sample,
    grade: [6,7,8].sample,
    lesson_date: Date.new(2016,11,3)
  )
end

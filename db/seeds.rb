# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


50.times do
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    subject: "Math",
    grade: 8,
    bio: Faker::Hipster.sentence
  )

  Lesson.create(
    user_id: Random.new(50),
    title: Faker::Educator.course,
    subject: "Math",
    grade: 8,
    lesson_date: Faker::Date.forward(50)
  )
end

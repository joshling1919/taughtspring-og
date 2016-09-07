json.extract! @lesson, :id, :user_id, :title, :subject, :grade,
:lesson_date, :image_url, :thumbnail_url, :user, :objectives,
:key_points, :sections, :cfus, :misconceptions


#
# json.sections @lesson.sections do |section|
#   json.name section.name
#   json.description section.description
#   # json.cfus section.cfus
#   # json.misconceptions section.misconceptions
# end
#
# json.cfus @lesson.sections do |section|
#   section.cfus
# end
#
# json.misconceptions @lesson.sections do |section|
#   section.misconceptions
# end

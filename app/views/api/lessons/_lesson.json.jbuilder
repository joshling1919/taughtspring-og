# json.extract!(lesson, :id, :user_id, :title, :subject,
#       :grade, :lesson_date, :image_url, :thumbnail_url,
#       :user, :objectives, :key_points, :sections)
#
# json.array! lesson.sections do |section|
#   json.cfus section.cfus
#   json.misconceptions section.misconceptions
# end

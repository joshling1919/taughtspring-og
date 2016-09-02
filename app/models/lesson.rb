# == Schema Information
#
# Table name: lessons
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  subject     :string
#  grade       :integer
#  lesson_date :date
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :string
#

class Lesson < ActiveRecord::Base
  validates :title, presence: true
  belongs_to :user
end

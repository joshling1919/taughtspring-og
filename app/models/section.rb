# == Schema Information
#
# Table name: sections
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  minutes     :integer          not null
#  description :text
#  lesson_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Section < ActiveRecord::Base
  validates :name, :minutes, :lesson_id, presence: true

  belongs_to :lesson
end

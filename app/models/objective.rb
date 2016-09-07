# == Schema Information
#
# Table name: objectives
#
#  id          :integer          not null, primary key
#  lesson_id   :integer          not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Objective < ActiveRecord::Base
  validates :lesson_id, presence: true

  belongs_to :lesson
end

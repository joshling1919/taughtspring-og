# == Schema Information
#
# Table name: key_points
#
#  id         :integer          not null, primary key
#  lesson_id  :integer          not null
#  point      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class KeyPoint < ActiveRecord::Base
  validates :lesson, presence: true

  belongs_to :lesson, inverse_of: :key_points
end

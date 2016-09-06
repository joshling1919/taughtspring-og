# == Schema Information
#
# Table name: sections
#
#  id          :integer          not null, primary key
#  name        :string
#  minutes     :integer
#  description :text
#  lesson_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Section < ActiveRecord::Base
  validates :lesson_id, presence: true

  belongs_to :lesson, dependent: :destroy
  has_many :cfus
  has_many :misconceptions 
end

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

  belongs_to :lesson, inverse_of: :sections
  has_many :cfus, dependent: :destroy, inverse_of: :section
  has_many :misconceptions, dependent: :destroy
end

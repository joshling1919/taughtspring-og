# == Schema Information
#
# Table name: lessons
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  title         :string           not null
#  subject       :string
#  grade         :integer
#  lesson_date   :date
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  image_url     :string
#  thumbnail_url :string
#

class Lesson < ActiveRecord::Base
  validates :user_id, :title, presence: true

  belongs_to :user
  has_many :objectives, inverse_of: :lesson, dependent: :destroy
  has_many :key_points, inverse_of: :lesson, dependent: :destroy
  has_many :sections, inverse_of: :lesson, dependent: :destroy
  has_many :misconceptions, through: :sections
  has_many :cfus, through: :sections

  accepts_nested_attributes_for :objectives, :key_points, :sections,
    :misconceptions, :cfus
end

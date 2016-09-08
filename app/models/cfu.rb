class Cfu < ActiveRecord::Base
  validates :section_id, presence: true
  belongs_to :section, inverse_of: :cfus
  has_one :lesson, through: :section
end

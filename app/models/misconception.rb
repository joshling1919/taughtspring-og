class Misconception < ActiveRecord::Base
  validates :section, presence: true
  belongs_to :section, inverse_of: :misconceptions
end

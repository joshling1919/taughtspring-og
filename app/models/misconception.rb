class Misconception < ActiveRecord::Base
  validates :section_id, presence: true
  belongs_to :section, dependent: :destroy
end

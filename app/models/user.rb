# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  grade           :integer
#  subject         :string
#  bio             :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  default_scope { order('id DESC') }
  validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }

  has_many :lessons

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    pw_digest = BCrypt::Password.new(self.password_digest)
    pw_digest.is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(32)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(32)
  end
end

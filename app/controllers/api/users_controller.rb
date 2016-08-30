class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_prams
    params.require(:user).permit(:first_name, :last_name, :email, :password, :subject, :grade, :bio)
  end
end

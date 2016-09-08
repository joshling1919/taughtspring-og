class Api::CfusController < ApplicationController
  def create
    @cfu = Cfu.create(cfu_params)
    render :show
  end

  def destroy
    @cfu = Cfu.find(params[:id])
    @cfu.destroy
    render :show
  end

  private
  def cfu_params
    params.require(:cfu).permit(
      :question,
      :answer,
      :section_id
    )
  end
end

# spec/controllers/api/v1/deputies_controller_spec.rb

require 'rails_helper'

RSpec.describe Api::V1::DeputiesController do
  describe "GET #index" do
    before do
      get :index
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

  describe 'POST #create' do
    before do
      @deputy = FactoryBot.build(:deputy)
    end

    describe 'passing valid params' do
      before do
        post :create, params: { deputy: @deputy.as_json }, format: :json
        @deputy = Deputy.last
      end

      it 'responds with 201' do
        expect(response).to have_http_status :created
      end
    end
  end
end
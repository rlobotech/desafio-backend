module Api
  module V1
    class DeputiesController < ApplicationController
      # before_action :authenticate, only: %i[create update destroy]
      protect_from_forgery with: :null_session

      # GET /api/v1/deputies
      def index
        # render json: serializer(deputies, options)
        render json: deputies
      end
      
      # GET /api/v1/deputies/:slug
      def show
        # render json: serializer(deputy, options)
        render json: deputy
      end

      # POST /api/v1/deputies
      def create
        deputy = Deputy.new(allowed_list_params)

        if deputy.save
          # render json: serializer(deputy)
          render json: deputy
        else
          render json: errors(deputy), status: 422
        end
      end

      # PATCH /api/v1/deputies/:slug
      def update
        # deputy = Airline.find(params[:id])

        if deputy.update(allowed_list_params)
          # render json: serializer(deputy, options)
          render json: deputy
        else
          render json: errors(deputy), status: 422
        end
      end

      # DELETE /api/v1/deputies/:slug
      def destroy
        if deputy.destroy
          head :no_content
        else
          render json: errors(deputy), status: 422
        end
      end

      private

      # Used For compound documents with fast_jsonapi
      # def options
      #   @options ||= { include: %i[reviews] }
      # end

      # Get all deputies
      def deputies
        @deputies ||= Deputy.all
      end

      # Get a specific deputy
      def deputy
        @deputy ||= Deputy.find(params[:id])
      end

      def allowed_list
          %i[full_name cpf political_party registered_id]
      end

      def allowed_list_params
          params.require(:deputy).permit(allowed_list)
      end

      # # fast_jsonapi serializer
      # def serializer(records, options = {})
      #   AirlineSerializer
      #     .new(records, options)
      #     .serialized_json
      # end

      # Errors
      def errors(record)
        { errors: record.errors.messages }
      end
    end
  end
end
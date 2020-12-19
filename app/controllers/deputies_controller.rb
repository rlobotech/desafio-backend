class DeputiesController < ApplicationController
    def index
        @deputies = Deputy.all
    end

    def show
        @deputy = Deputy.find(params[:id])
    end

    def new
        @deputy = Deputy.new
    end

    def create
        @deputy = Deputy.new(allowed_list_params)
        if(@deputy.save)
            redirect_to @deputy
        else
            render 'new'
        end
    end

    def edit
        @deputy = Deputy.find(params[:id])
    end

    def update
        @deputy = Deputy.find(params[:id])
        if(@deputy.update(allowed_list_params))
            redirect_to @deputy
        else
            render 'edit'
        end
    end

    def destroy
        @deputy = Deputy.find(params[:id])
        @deputy.destroy

        redirect_to deputies_path
    end

    private

    def allowed_list
        %i[full_name cpf political_party registered_id]
    end

    def allowed_list_params
        params.require(:deputy).permit(allowed_list)
    end
end

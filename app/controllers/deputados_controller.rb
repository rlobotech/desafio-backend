class DeputadosController < ApplicationController
    def index
        @deputados = Deputado.all
    end

    def show
        @deputado = Deputado.find(params[:id])
    end

    def new
        @deputado = Deputado.new
    end

    def create
        @deputado = Deputado.new(allowed_list_params)
        if(@deputado.save)
            redirect_to @deputado
        else
            render 'new'
        end
    end

    def edit
        @deputado = Deputado.find(params[:id])
    end

    def update
        @deputado = Deputado.find(params[:id])
        if(@deputado.update(allowed_list_params))
            redirect_to @deputado
        else
            render 'edit'
        end
    end

    def destroy
        @deputado = Deputado.find(params[:id])
        @deputado.destroy

        redirect_to deputados_path
    end

    private

    def allowed_list
        %i[nome cpf partido id_cadastro]
    end

    def allowed_list_params
        params.require(:deputado).permit(allowed_list)
    end
end

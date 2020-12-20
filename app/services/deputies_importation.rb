class DeputiesImportation < Service
  attr_accessor :file

  def initialize(file)
    self.file = file
  end

  def call
    ActiveRecord::Base.transaction do

    end
  end
end
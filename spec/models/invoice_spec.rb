require 'rails_helper'

RSpec.describe Invoice, type: :model do
  it 'should not create a invoice without a deputy' do
    item = FactoryBot.build(:invoice)
    expect { item.save }.to_not change(Invoice, :count)
    expect(item.errors[:deputy]).to_not be_empty
  end

  describe 'with one deputy' do
    before do
      @deputy = FactoryBot.create(:deputy, cpf: 'some_cpf')
    end

    it 'should  create a invoice' do
      FactoryBot.create(:invoice, deputy_id: @deputy.id)
      expect(Invoice.count).to be_eql(1)
    end
  end
end

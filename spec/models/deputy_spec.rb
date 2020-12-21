require 'rails_helper'

RSpec.describe Deputy, type: :model do
  it 'should create a deputy' do
    FactoryBot.create(:deputy, cpf: 'some_cpf')
    expect(Deputy.count).to be_eql(1)  
  end

  it 'should not create a deputy' do
    item = FactoryBot.build(:deputy, full_name: nil, cpf: nil, registered_id: nil)
    expect { item.save }.to_not change(Deputy, :count)
    expect(item.errors[:full_name]).to_not be_empty
    expect(item.errors[:cpf]).to_not be_empty
    expect(item.errors[:registered_id]).to_not be_empty
  end

  it 'should not create a deputy with a used cpf' do
    FactoryBot.create(:deputy, cpf: 'some_cpf')
    item = FactoryBot.build(:deputy, cpf: 'some_cpf')
    expect { item.save }.to_not change(Deputy, :count)
    expect(item.errors[:cpf]).to_not be_empty
  end

  describe 'with one deputy' do
    before do
      @item = FactoryBot.create(:deputy, cpf: 'some_cpf')
    end

    it { expect(@item.sum_invoices_net_values).to be_eql(0) }

    it 'should sum net values form its invoice' do
      FactoryBot.create(:invoice, deputy_id: @item.id)
      expect(@item.sum_invoices_net_values).to be_eql(100.0)
    end

    it 'should sum net values form its invoices' do
      FactoryBot.create_list(:invoice, 3, deputy_id: @item.id)
      expect(@item.sum_invoices_net_values).to be_eql(300.0)
    end
  end
end


class Card
  attr_reader :suit, :value

  def initialize(suit, value)
    @suit = suit.capitalize
    @value = value;
  end

end

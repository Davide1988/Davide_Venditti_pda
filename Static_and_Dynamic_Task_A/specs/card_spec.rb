require( 'minitest/autorun' )
require( 'minitest/rg')
require_relative( '../models/card' )

class TestCard < MiniTest::Test

  def setup

    @card1 = Card.new("hearts", 2)


  end



  def test_get_value
    assert_equal(2,@card1.value)
  end


  def test_get_suit
    assert_equal("Hearts",@card1.suit)
  end



end

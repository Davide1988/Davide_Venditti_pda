require( 'minitest/autorun' )
require( 'minitest/rg')
require_relative( '../models/card_game' )
require_relative( '../models/card' )

class TestCardGame < MiniTest::Test

  def setup

    @card1 = Card.new("hearts" , 1)
    @card2 = Card.new("hearts" , 7)
    @round1 = CardGame.new()

    @cards = [@card1,@card2]

  end

  def  test_check_for_ace__true
      assert_equal(true, @round1.check_for_ace(@card1))
  end

  def  test_check_for_ace__false
      assert_equal(false, @round1.check_for_ace(@card2))
  end

  def test_highest_card
    assert_equal(@card2, @round1.highest_card(@card1,@card2))
  end

  def test_cards_total
    assert_equal("You have a total of 8",CardGame.cards_total(@cards))
  end

end

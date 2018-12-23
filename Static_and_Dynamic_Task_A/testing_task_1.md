### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame

  #THE CLASS DOES'T HAVE AN initialize ??


  def checkforAce(card)
    #the name of the function should be in snake_case . Correct way : check_for_ace
    if card.value = 1
      # this method .value can't be called on card  in not initialized
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  #dif should be def, and a comma is missing in between the two arguments that the functions takes
  if card1.value > card2.value
    return card
    # the number 1 is missing
  else
    return card2
  end
end
end
# there is an extra end , 1 end is needed to close the function and 1 to close the if statement.

def self.cards_total(cards)
  total
  # total should be initialized to 0
  for card in cards
    total += card.value
    # end is require 
    return "You have a total of" + total
    # The right way of returning the sentence above should be : "You have a total of #{total}".
  end
end
```

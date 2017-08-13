template_list = [
  "sorry you feel that way",
  "there's no reason for you to be this upset",
  "ruebots and woebots"
]

template_list.each do |greeting|
  CardTemplate.create(greeting: greeting)
end

card_list = [
  {
    custom_message: "bite me",
    card_template_id: 1,
    signature: "the kittens",
    recipient_name: "stinkboss",
    street_address: "the rest of the house",
    city: "oakland",
    state: "ca",
    zip_code: "94607"
  },
  {
    custom_message: "and so's your old man",
    card_template_id: 1,
    signature: "you know who",
    recipient_name: "city planning",
    street_address: "1 frank ogawa sq",
    city: "oakland",
    state: "ca",
    zip_code: "94612"
  },
  {
    custom_message: "and how",
    card_template_id: 1,
    signature: "me",
    recipient_name: "future me",
    street_address: "probably still here",
    city: "oakland",
    state: "ca",
    zip_code: "94607"  
  }
]

card_list.each do |card_info|
  Card.create(card_info)
end










# GROCERY LIST APP

## My Groceries

This project will help you organice your grocery shopping list and some other home shopping needs. **This project was created using create-react-app.**

## Getting Started

`cd grocery-list`

`npm start`

## Components

- Form.js
   - Here you will find everything in work for creating new list elements for our grocery list. We've got a selector were we especify the item category, an input for its name, and a submit button.

- ItemsList.js
   - Here is the list which display every item in it category, we adapt every ItemsList to every of the three product types lists.

- Item.js
   - This is the actual item we want on our grocery list. Every item in every list has it own information given by what we submited in the form respectively. We also give each item a delete and an in-cart button, for deleting it or specifying we already took this product and it's on our cart.

## Usage
    
   The first thing you'll see once you run the project -below the title- is an input with three buttons, each button was made to select the category of the product we want to include on our shopping list, we've got food, pharmacy, or the default selection, other. Once we pick a category and name the product in the input, we select de + button to add this new item to our list.

   You´ll see that the product was displayed in one of the three lists that are below the form, depending the category we chose for it.
    
   For last, we've got two buttons next to our item, the trash icon will delete the product from our list and the cart button will select the item, so it will help you distinguish the products you need to buy from the ones there are already on your cart but you still yet don't buy them.


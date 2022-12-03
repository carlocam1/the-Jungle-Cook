# the-Jungle-Cook

The Jungle Cook - CRUD - application

1. application starts with user signed out, even if user was previously logged in.
2. When user is not logged in, only 'browse and home' links are displayed.
3. When user logs in, all the other links are displayed in the nav along with the
   user's name.
4. On the "create recipe page," when clicking the button 'create recipe',
   'Your Recipe page" is displayed. Your recipe page displays all the user recipes.
5. On 'your recipe page' when clicking 'view' button, the 'view recipe page' is displayed along with the info of the one recipe cliked.
6. On 'your recipe page,' when clicking the 'edit button' the 'edit recipe' page is displayed.
7. As long as the user is logged in, all nav links are displayed. so the user can access
   any page.
8. User can add and delete recipes. User document is always updated locally and in firebase.

   Issues:

   1. Create Recipe Page can only accept three inputs for ingredients and instructions, more items can't be added.
   2. The edit form only updates the fields where user types something.
   3. When user creates an account, their name appears as undefined at first. But if page is refresh the user name will be displayed correctly in the top right corner.
   4. For some reason firebase logs the user out, most of the time, but sometimes it doesn't, when user creates an account. I could not figure out why. But locally on my computer works fine.

   You can log in with this account info, in case you can't create an account with out been logged out, so you can see that I got something done.

   email: "k@p.com"
   firstName: "Karen"
   lastName: "Pinto"
   password: "password"

## URL

https://co-final-320.web.app

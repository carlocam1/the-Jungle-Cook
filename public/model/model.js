
var RECI = [
    {
        recipeTitle: "Camping Esentials",
        recipeThumbing: "recipe-burger.jpg",
        recipeBriefDescription: "Make pizza night super duper out of this world with homemade pizza.This recipe is supreme with vegetables and two types of meat. Yum!",
        timeImage: "time.svg",
        servings: "4 Servings"
        // campRating: "A",
        // itemPrice: "$44.95",
    },
    
    {
        recipeTitle: "Camping Esentials",
        recipeThumbing: "recipe-chowmein.jpg",
        recipeBriefDescription: "Make pizza night super duper out of this world with homemade pizza.This recipe is supreme with vegetables and two types of meat. Yum!",
        timeImage: "time.svg",
        servings: "6 Servings",
        // campRating: "A",
        // itemPrice: "$44.95",
    },

    {
        recipeTitle: "Camping Esentials",
        recipeThumbing: "recipe-pilaf.jpg",
        recipeBriefDescription: "Make pizza night super duper out of this world with homemade pizza.This recipe is supreme with vegetables and two types of meat. Yum!",
        timeImage: "time.svg",
        servings: "8 Servings",
        // campRating: "A",
        // itemPrice: "$44.95",
  },

  {
        recipeTitle: "Camping Esentials",
        recipeThumbing: "recipe-pizza.jpg",
        recipeBriefDescription: "Make pizza night super duper out of this world with homemade pizza.This recipe is supreme with vegetables and two types of meat. Yum!",
        timeImage: "time.svg",
        servings: "10 Servings",
        // campRating: "A",
        // itemPrice: "$44.95",
  },

  
];

var LISTS = [
    {
      name: "Ingredients",
      listItems: [
            {
                name: "essentials#1",
                checked: false,
                category: "",
            },

            {
                name: "essentials#2",
                checked: false,
                category: "",
            },
      ], 
    },

    {
      name: "Instructions",
      listItems: [
              {
                  name: "chair#1",
                  checked: false,
                  category: "sporting goods",
              },
  
              {
                  name: "chair#2",
                  checked: false,
                  category: "sporting goods",
              },
      ], 
    },
];

var userExists = false;

export function userIslogin(userName) {
  console.log("sign out button");
  $(".links").html(`
  <a id="home" href="#home"
  >Home
  <div class="line"></div>
  </a>
<a id="browse" href="#browse"
  >Browse
  <div class="line"></div>
</a>
<a id="createRecipe" href="#createRecipe"
  >Create Recipe
  <div class="line"></div>
</a>
<a id="yourRecipe" href="#yourRecipe"
  >Your Recipe
  <div class="line"></div>
</a>
<a id="editRecipe" href="#editRecipe"
  >Edit Recipe
  <div class="line"></div>
</a>
<a id="viewRecipe" href="#viewRecipe"
  >View Recipe
  <div class="line"></div>
</a>
<a id="login" href="#login">
  <div class="button">log out</div>
</a>
<div class="name">${userName}</div>`);

  $("#login").html(`<div id="userLogsOut" class="button">log out
  </div>`);

  $("#userLogsOut").click(function(e){
    // console.log("clicked");
    signOut();
});
  initListeners();
  barListeners();

}

export function userIsSignOut(){
  console.log("User sign out export function");
  $(".links").html(`
  <a id="home" href="#home"
  >Home
  <div class="line"></div>
  </a>
<a id="browse" href="#browse"
  >Browse
  <div class="line"></div>
</a>
<a id="login" href="#login">
  <div  id="userLogsIn" class="button">login</div>
</a>
<div class="name"></div>`);

$("#userLogsIn").click(function(e){
  console.log("clicked #userLogsIn");
  loginPage();
  console.log("calling signIn()");
  signIn();
  console.log("calling userIsLogin()");
  userIslogin();
});

initListeners();
barListeners();

}

export function changePageContent (){
    $("#app").html(`<div class="home">
    <div class="hero">
      <div class="hero-image hero-properties">
        <div class="callout">
          <div class="back-circle">
            <div class="inner-text">
              <p>Want to be a Jungle Cook? Go ahead and the kitchen is yours!</p>
            </div>
          </div>
          <div class="front-circle">
            <div class="inner-text">
              <h1>The Jungle Cook</h1>
              <div class="p-container">
                <p>
                  The home to various recipes of your choice. Add your own recipe
                  today and fill the world with joy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`);

};


export function browsePageContent() {
    console.log("Inside browsePageContent()")

    $("#app").html(`<div class="browse recipe-hero">
    <div class="recipe-header">Recipes: Try Some Today</div>
    <div class="recipes">
      <div class="recipe-cont">
        <div class="recipe-img"></div>
        <div class="recipe-desc">
          <div class="recipe-title">Supreme Pizza</div>
          <div class="brief-desc">
            Make pizza night super duper out of this world with homemade pizza.
            This recipe is supreme with vegetables and two types of meat. Yum!
          </div>
          <div class="time">
            <img src="/images/time.svg" alt="" />
            1h 24min
          </div>
          <div class="servings">
            <img src="/images/servings.svg" alt="" />
            4 Servings
          </div>
        </div>
      </div>
      <div class="recipe-cont">
        <div class="recipe-img"></div>
        <div class="recipe-desc">
          <div class="recipe-title">Supreme Pizza</div>
          <div class="brief-desc">
            Make pizza night super duper out of this world with homemade pizza.
            This recipe is supreme with vegetables and two types of meat. Yum!
          </div>
          <div class="time">
            <img src="/images/time.svg" alt="" />
            1h 24min
          </div>
          <div class="servings">
            <img src="/images/servings.svg" alt="" />
            4 Servings
          </div>
        </div>
      </div>
      <div class="recipe-cont">
        <div class="recipe-img"></div>
        <div class="recipe-desc">
          <div class="recipe-title">Supreme Pizza</div>
          <div class="brief-desc">
            Make pizza night super duper out of this world with homemade pizza.
            This recipe is supreme with vegetables and two types of meat. Yum!
          </div>
          <div class="time">
            <img src="/images/time.svg" alt="" />
            1h 24min
          </div>
          <div class="servings">
            <img src="/images/servings.svg" alt="" />
            4 Servings
          </div>
        </div>
      </div>
      <div class="recipe-cont">
        <div class="recipe-img"></div>
        <div class="recipe-desc">
          <div class="recipe-title">Supreme Pizza</div>
          <div class="brief-desc">
            Make pizza night super duper out of this world with homemade pizza.
            This recipe is supreme with vegetables and two types of meat. Yum!
          </div>
          <div class="time">
            <img src="/images/time.svg" alt="" />
            1h 24min
          </div>
          <div class="servings">
            <img src="/images/servings.svg" alt="" />
            4 Servings
          </div>
        </div>
      </div>
    </div>
  </div>`)


// $.each(RECI, function(idx, rec) {
//     $("#app").append(`<div id="${idx}" class="recipe-cont">
//     <div class="recipe-img">
//         <img src="images/camps_thumb/recipe-burger.jpg" alt="${rec.recipeTitle}" />
//     </div>
//     <div class="recipe-desc">
//       <div class="recipe-title">${rec.recipeTitle}</div>
//       <div class="brief-desc">
//         ${rec.recipeBriefDescription}
//       </div>
//       <div class="time">
//         <img src="/images/time.svg" alt="" />
//         1h 24min
//       </div>
//       <div class="servings">
//         <img src="/images/${rec.timeImage}" alt="" />
//         ${rec.servings}
//       </div>
//     </div>
//   </div>`)



//         $("#app").append(`
//   <div id="${idx}" class="camp-holder">
//     <h5>${camp.campTitle}</h5>
//     <div class="camp-image">
//       <img src="images/camps_thumb/${camp.campThumbing}" alt="${camp.campTitle}" />
//     </div>
//     <div class="brief-rating">
//       <div class="brief-des">
//         ${camp.campBriefDescription}
//       </div>
//       <div class="thumb-price">Price: ${camp.itemPrice}</div>
//     </div>
    
//     ${listString = `<li id="${idx}" class="btn-gallery" onclick="loadListItems(${idx})">${LISTS[idx].name}</li>`}
//   </div>`);
// });
}

export function editRecipe(){
    console.log("Inside editRecipe")
    $.get(`pages/editRecipe/editRecipe.html`, function (data) {
        // console.log("data " + data);
        $("#app").html(data);

        $("#submit").click(function(e){
            console.log("Click submit");
            yourRecipe();
        });
    }); 
}

export function viewRecipe(){
    console.log("Inside export viewRecipe")
     $("#app").html(`<div class="view-recipe">
     <div class="viewRecipe-cont">
       <div class="img-desc">
         <div class="img-left"></div>
         <div class="desc-right">
           <div class="viewRecipe-title">Description</div>
           <div class="brief-description">
             Make pizza night super duper out of this world with homemade pizza.
             This recipe is supreme with vegetables and two types of meat. Yum!
           </div>
           <div class="time-servings">
             Total Time
             <h4 id="totalTime">1h 24min</h4>
           </div>
           <div class="time-servings">
             Servings
             <h4 id="totalServings">4: Servings</h4>
           </div>
         </div>
       </div>
       <div class="ingred-instr">
         <div class="viewRecipe-title">Ingredients</div>
         <h4>
           1/4 batch pizza dough<br />
           2 tablespoons Last-Minute Pizza Sauce<br />
           10 slices pepperoni<br />
           1 cup cooked and crumbled Italian sausage<br />
           2 large mushrooms, sliced 1/4 bell pepper, sliced<br />
           1 tablespoon sliced black olives<br />
           1 cup shredded mozzarella cheese
         </h4>
       </div>
       <div class="ingred-instr">
         <div class="viewRecipe-title">Ingredients</div>
         <h4>
           1/4 batch pizza dough<br />
           2 tablespoons Last-Minute Pizza Sauce<br />
           10 slices pepperoni<br />
           1 cup cooked and crumbled Italian sausage<br />
           2 large mushrooms, sliced 1/4 bell pepper, sliced<br />
           1 tablespoon sliced black olives<br />
           1 cup shredded mozzarella cheese
         </h4>
       </div>
   
       <div class="button-holder">
         <div class="btn">Edit Recipe</div>
       </div>
     </div>
   </div>`);

}

export function createRecipe(){
    console.log("Inside export createRecipe")
    $("#app").html(`<div class="create-recipe">
    <div class="create-recipe-container">
      <h1>Hello there, Create your recipe!</h1>
      <form>
        <div class="recipe-info">
          <!-- Attach button -->
          <div class="attach-file">Attach file</div>
          <label for="rName"></label>
          <!-- ************* -->
          <input id="rName" type="text" name="rName" placeholder="Recipe Name" />
  
          <label for="rDescription"></label>
          <input
            id="rDescription"
            type="text"
            name="rDescription"
            placeholder="Recipe Description"
          />
  
          <label for="rTotalTime"></label>
          <input
            id="rTotalTime"
            type="text"
            name="rTotalTime"
            placeholder="Recipe Total Time"
          />
  
          <label for="rSize"></label>
          <input id="rSize" type="text" name="rSize" placeholder="Recipe Size" />
        </div>
  
        <div class="ingredients">
          <!-- button to add more ingredients -->
          <!-- <div class="more">
            <button onclick="addItem()">+</button>
          </div> -->
          <!-- ****************************** -->
          <h3>Enter Ingredients:</h3>
  
          <label for="ingredientOne"></label>
          <input
            id="ingredientOne"
            type="text"
            name="ingredientOne"
            placeholder=" Ingredient #1:"
          />
  
          <label for="ingredientTwo"></label>
          <input
            id="ingredientTwo"
            type="text"
            name="ingredientTwo"
            placeholder="Ingredient #2"
          />
  
          <label for="ingredientThree"></label>
          <input
            id="ingredientThree"
            type="text"
            name="ingredientThree"
            placeholder="Ingredient #3"
          />
  
          <input id="addItems" type="text" placeholder="Ingredient #4" />
          <button class="more" onclick="addItem()">+</button>
        </div>
  
        <div class="ingredients">
          <!-- button to add more ingredients -->
          <div class="more">+</div>
          <!-- ****************************** -->
          <h3>Enter Instructions:</h3>
  
          <label for="instructionOne"></label>
          <input
            id="instructionOne"
            type="text"
            name="instructionOne"
            placeholder=" Instruction #1:"
          />
  
          <label for="instructionTwo"></label>
          <input
            id="instructionTwo"
            type="text"
            name="instructionTwo"
            placeholder="Instruction #2"
          />
  
          <label for="instructionThree"></label>
          <input
            id="instructionThree"
            type="text"
            name="instructionThree"
            placeholder="Instruction #3"
          />
        </div>
  
        <div class="submit-btn">
          <input id="submit" type="submit" value="Create Recipe" />
        </div>
      </form>
    </div>
  </div>`);

  $("#submit").click(function(e){
    console.log("Click submit");
    e.preventDefault();
        let recipeName = $("#rName").val();
        let recipeDescription = $("#rDescription").val();
        let rTotalTime = $("#rTotalTime").val();
        let rSize = $("#rSize").val();
        let ingredientOne = $("#ingredientOne").val();
        let ingredientTwo = $("#ingredientTwo").val();
        let ingredientThree = $("#ingredientThree").val();
        let instructionOne = $("#instructionOne").val();
        let instructionTwo = $("#instructionTwo").val();
        let instructionThree = $("#instructionThree").val();
        let instructionFour = $("#instructionFour").val();

        console.log("Recipe Name: " + recipeName + ', '
         + "Recipe Description: " + recipeDescription + ', ' + "Recipe Total Time: " + rTotalTime + ', '
         + "Recipe Size: " + rSize + ', ' 
         + "Ingredient One: " + ingredientOne + ', '
         + "Ingredient Two: " + ingredientTwo + ', '
         + "Ingredient Three: " + ingredientThree + ', ' 
         + "Instruction One: " + instructionOne + ', ' 
         + "Instruction Two: " + instructionTwo + ', ' 
         + "Instruction Three: " + instructionThree + ', ' 
         + "Instruction four: " + instructionFour);    
    yourRecipe();
});
}

export function yourRecipe(){
    console.log("click your Recipe ");
    $.get(`pages/yourRecipe/yourRecipe.html`, function (data) {
        // console.log("data " + data);
        $("#app").html(data);

        $("#viewRecipes").click(function(e){
            console.log("Click viewRecipe");
            viewRecipe();
        });

        $("#edRecipe").click(function(e){
            console.log("Click editRecipe");
            editRecipe();
        });

    });  
}

export function loginPage(){

$("#app").html(`<div class="login-signUp">
<div class="login-signUp-container">
  <div class="login">
    <h1>Login Here!</h1>
    <div class="input-properties">
      <label for="email"></label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email Address"
      />
      <label for="password"></label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="Password"
      />

      <div class="submit-btn">
        <input
         id="login-submit" 
         type="submit" 
         onclick="loginAccount()" 
         value="Login" 
        />
      </div>
      <!-- <div class="button">login</div> -->
    </div>
  </div>
  <div class="sign-up">
    <h6>don’t have an account?</h6>
    <h1>Sign Up!</h1>

    <div class="input-properties">
      <label for="fName"></label>
      <input id="fName" type="text" name="fName" placeholder="First Name" />

      <label for="lName"></label>
      <input id="lName" type="text" name="lName" placeholder="Last Name" />

      <label for="email"></label>
      <input
        id="signup-email"
        type="email"
        name="email"
        placeholder="Email Address"
      />
      <label for="password"></label>
      <input
        id="signup-password"
        type="password"
        name="password"
        placeholder="Password"
      />

      <div class="submit-btn">
        <input
          id="signup-submit"
          type="submit"
          onclick="createAccount()"
          value="Sign Up"
        />
      </div>

      <!-- <div class="button">Sign Up</div> -->
    </div>
  </div>
</div>
</div>`);
}

window.addItem = function(){
    console.log("Add Item Function")
    let newItemName = $("#addItems").val();
    let newItemObj = {
        name: newItemName,
        checked: false,
        category: "",
    }

    LISTS[2].listItems.push(newItemObj);
    // loadListItems(2);

    // LISTS[1].listItems.push(newItemObj);
}

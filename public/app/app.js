import { changePageContent,browsePageContent,viewRecipe, yourRecipe, editRecipe, createRecipe, userIslogin, userIsSignOut, loginPage } from "../model/model.js";


var _db = "";
var userExists = false;
var userFullName = "";
var _userProfileInfo = {};

function changeRoute(){
    changePageContent();
}

window.loadData = function(){
    console.log("Inside load data");
    // $(window).on("hashchange", changeRoute);
    changeRoute();
    initListeners(); 
}

window.addMainList = function(){
  let newListName = $("listName").val();
  let newListObj = {
    name: newListName,
    listItems: [],
  };

  _userProfileInfo.lists.push(newListObj);
  updateUserInfo(_userProfileInfo);
  loadLists();
  $("listName").val("");

}

window.updateUserInfo = function (userObj) {
  let id = firebse.auth().currentUser.uid;
  _db
  .collection("Users")
  .doc(id).update(userObj)
  .then(() => {
    console.log("updated doc");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("update error " + errorMessage);
  });
}

window.initListeners = function(){

    barListeners();

    $("#home").click(function(e){
        console.log("click home ");
        $.get(`pages/home/home.html`, function (data) {
            // console.log("data " + data);
            $("#app").html(data);
        }); 
    });

        $("#browse").click(function(e){
            console.log("Click Browse")
            browsePageContent();
        });

        $("#createRecipe").click(function(e){
            console.log("click create Recipe ");
            createRecipe();
        });

        $("#yourRecipe").click(function(e){
            yourRecipe();
        });

        $("#editRecipe").click(function(e){
            console.log("clicked edit Recipe ");
            editRecipe();
        });
          
        $("#viewRecipe").click(function(e){
            console.log("clicked View Recipe ");
            viewRecipe();
        });
    
        $("#login").click(function(e){
            console.log("click login ");
            loginPage();
            // $.get(`pages/login/login.html`, function (data) {
            //     // console.log("data " + data);
            //     $("#app").html(data);
            // }); 
        });

}

window.barListeners = function (){
    $(".bars").click(function(e){
      // console.log("clicked");
      $(".bars").toggleClass("active");
      $(".links").toggleClass("active");
  });

  $(".links a").click(function(e){
      $(".bars").toggleClass("active");
      $(".links").toggleClass("active");
       $(".links").removeClass("active");
  });
}



function initFirebase(){
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            _db = firebase.firestore();
            console.log("auth change logged in")
            if(!user.displayName) {
                userName = "";
            }
            if(user.displayName){
                $(".name").html(user.displayName);
                var userName = user.displayName;
            }

            userIslogin(userName);
            console.log("User Name " + userName);
           
            // userIsSignOut();
            userExists = true;
        }
        else {
            console.log("auth change logged out")
            _db = "";
            _userProfileInfo = {};
            $(".name").html("Hello!");
            userIsSignOut();
            // userIslogin();
            userExists = false;
            userFullName = "";
        }
    });
}

window.signOut = function (){
  firebase.auth().signOut()
  .then(() => {
    console.log("signed out");
    userIsSignOut();
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Error signing signing out");
  });
}

window.createAccount = function(){
    console.log("create account---");
    let fName = $("#fName").val();
    let lName = $("#lName").val();
    let email = $("#signup-email").val();
    let password = $("#signup-password").val();
    let fullName = fName + " " + lName;
    let userObj = {
      firstName: fName,
      lastName: lName,
      email: email,
      list: [],
    }

    console.log ("Create " + fName + ' ' + lName + ' ' + email + ' ' + password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log("created")
    firebase.auth().currentUser.updateProfile({
        displayName: fullName,
    });

    _db.
    collection("Users")
    .doc(user.uid)
    .set(userObj)
    .then((doc) => {
      console.log("doc added ");
      _userProfileInfo = userObj;
      console.log("create userinfo ", _userProfileInfo);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("create error " + errorMessage);
    });

    userFullName = fullName;
    $(".name").html(userFullName);
    let fName = $("#fName").val("");
    let lName = $("#lName").val("");
    let email = $("#signup-email").val("");
    let password = $("#signup-password").val("");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("create error " + errorMessage);
  });
    
}

window.loginAccount = function(){
    console.log("login Account")
    let email = $("#email").val();
    let password = $("#password").val();
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("logged in")
    $("#email").val("");
    $("#password").val("");

    _db
    .collection("Users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      console.log(doc.data());
      _userProfileInfo = doc.data();
      // loadLists();
      console.log("login userinfo ", _userProfileInfo);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("logged in error" + errorMessage);
    });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("logged in error" + errorMessage);
  });
}

window.signIn = function(){
    firebase.auth().signInAnonymously()
  .then(() => {
    console.log("signed in");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Error signing in" + errorMessage);
  });
}

$(document).ready(function(){
    console.log("inside document.ready")
    try {
        let app = firebase.app();
        initFirebase();
        // signInAnon();
        loadData();
    }
    catch(error){
        console.log("error " + error);
    }
        // loadData();
    
});
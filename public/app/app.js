import { changePageContent,browsePageContent, yourRecipe, createRecipe, userIslogin, userIsSignOut, loginPage } from "../model/model.js";


var _db = "";
var userExists = false;
var userFullName = "";
var userN = "";
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

window.loadListItems = function (){
  console.log("Inside loadListItems() function")
}

window.loadLists = function(){
  console.log("this is inside window.loadList ");

  console.log("User Profile info", _userProfileInfo);

  // let listString = `<ul>`;
  // $.each(_userProfileInfo.list, function(idx, listItem) {
  //   listString += `<li id="${idx}" onclick="loadListItems(${idx})">${listItem.name}
  //   <span class="right">items: ${listItem.listItems.length}</span></li>`;
  // });
  // listString += "</ul>";
  // $("#app").html(listString);

}

window.addMainList = function(newListObj){
  console.log("Inside addMainList")
  // let newListName = $("#listName").val();

  console.log("Object after asigning variables inside addListItems()-----")
  console.log(newListObj);
  console.log("User Profile Info Inside addMainList >>>>>>>>")
  
  console.log(_userProfileInfo)
  _userProfileInfo.list.push(newListObj);
  updateUserInfo(_userProfileInfo);
  // loadLists();
  // $("listName").val("");

}

window.getUserProfile = function(_userLists) {
  _userLists = _userProfileInfo;
  return _userLists;
}

window.updateUserInfo = function (userObj) {
  let id = firebase.auth().currentUser.uid;
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
            console.log("User full name" + userN);
            createRecipe(userN);
        });

        $("#yourRecipe").click(function(e){
            yourRecipe(_userProfileInfo);
        });

        $("#editRecipe").click(function(e){
            console.log("clicked edit Recipe ");
            editRecipe();
        });
          
        $("#viewRecipe").click(function(e){
            console.log("clicked View Recipe ");
            viewRecipe(_userProfileInfo);
        });
    
        $("#login").click(function(e){
            console.log("click login ");
            loginPage();
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

window.getUserDoc = function (){
  let id = firebase.auth().currentUser.uid;
  _db
    .collection("Users")
    .doc(id)
    .get()
    .then((doc) => {
      console.log(doc.data());
      _userProfileInfo = doc.data();
      // console.log("Before loadLists() inside login Account function")
      // loadLists();
      console.log("Inside getUserDoc() >>>>>>>", _userProfileInfo);
    })
}

function initFirebase(){
    firebase.auth().onAuthStateChanged((user) => {   
        if(user){
            _db = firebase.firestore();
            // signIn();
            console.log("auth change logged in")
            getUserDoc();
            // alert("logged in")
            if(!user.displayName) {
                userName = "";
                signOut();
            }
            if(user.displayName){
                $(".name").html(user.displayName);
                var userName = user.displayName;
                userN = userName;
            }

            if(!_userProfileInfo)
            {
              console.log("User profile is undefine ----->>>>")
            }


            // displays the updated nav links
            // changes the button to log out
            userIslogin(userName);
            console.log("User Name ---->> " + userName);
            console.log(_userProfileInfo);
           
            // userIsSignOut();
            userExists = true;
        }
        else {
            console.log("auth change logged out")
            alert("logged Out")
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
    console.log("signed out --> in app file");
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
    alert("Account Created")
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
    console.log("login Account >>>>>>")
    let email = $("#email").val();
    let password = $("#password").val();
    loadData();
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("logged in >>>>>>>")
    $("#email").val("");
    $("#password").val("");

    _db
    .collection("Users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      console.log(doc.data());
      _userProfileInfo = doc.data();
      console.log("Before loadLists() inside login Account function")
      loadLists();
      console.log("login userinfo >>>>>>>", _userProfileInfo);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("logged in error " + errorMessage);
    });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("logged in error" + errorMessage);
    alert("Please enter your email and password")
  });
}

window.signIn = function(){
    console.log("Function call from model signIn()#########")
    firebase.auth().signInAnonymously()
  .then((userCredential) => {
    console.log("signed in");
    var user = userCredential.user;

    _db
    .collection("Users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      console.log(doc.data());
      _userProfileInfo = doc.data();
      // loadLists();
      console.log("Inside sign in() >>>>>>>", _userProfileInfo);
    })
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
});
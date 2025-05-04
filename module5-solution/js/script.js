$(function () { // Ensure DOM is ready
  $("#navbarToggle").blur(function () {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse("hide");
    }
  });
});

/******************************/
/** Utility: insertProperty **/
/******************************/
function insertProperty(string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  return string.replace(new RegExp(propToReplace, "g"), propValue);
}

/******************************/
/** Constants (URLs) **/
/******************************/
var homeHtmlUrl = "snippets/home-snippet.html";
var allCategoriesUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json";
var menuItemsUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/";

// Namespace
var $dc = {};

/******************************/
/** Load Home Page **/
/******************************/
document.addEventListener("DOMContentLoaded", function () {
  $ajaxUtils.sendGetRequest(homeHtmlUrl, function (res) {
    document.querySelector("#main-content").innerHTML = res;

    // 👉 STEP 0: Add this line to insert random category
    $dc.chooseRandomCategoryAndLoadHomeSnippet();
  }, false);
});

/******************************/
/** STEP 1: Load Random Category **/
/******************************/
$dc.chooseRandomCategoryAndLoadHomeSnippet = function () {
  $ajaxUtils.sendGetRequest(
    allCategoriesUrl,
    buildAndShowHomeHTML,
    true
  );
};

/******************************/
/** STEP 2: Build Home HTML with Random Category **/
/******************************/
function buildAndShowHomeHTML(categories) {
  // Choose random category
  var randomIndex = Math.floor(Math.random() * categories.length);
  var randomCategoryShortName = "'" + categories[randomIndex].short_name + "'";

  // Get home snippet
  $ajaxUtils.sendGetRequest(homeHtmlUrl, function (homeHtml) {
    var updatedHtml = insertProperty(homeHtml, "randomCategoryShortName", randomCategoryShortName);
    document.querySelector("#main-content").innerHTML = updatedHtml;
  }, false);
}

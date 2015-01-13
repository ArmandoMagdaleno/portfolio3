/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".lbj").css("background-color", "gold");
    $("body").css("background-color", "black");
    $("h1").css({"background-color": "red", "color": "white"});
    $("p:lt(3)").css({"background-color": "maroon", "color": "white"});
    $("p:gt(2)").css({"background-color": "white", "color": "maroon"});
    $("h1").bind("mouseover", mouseOverMe).bind("mouseout", mouseOutMe);
    $("h1").bind("click", mouseClick);
    
    
    $("#replaceWText").bind("click", replaceWText);
    
    $("#randPara").bind("click", addAPara);

    $("#removePara").bind("click", removeAPara);

});

function mouseOverMe() {
    $("h1").html("GREATEST OF ALL TIME");
}

function mouseOutMe() {
    $("h1").html("LEBRON JAMES");
}

function mouseClick() {
    $("h1").html("CLUTCH");
}


////1) Add, 2) Remove, and 3) Change HTML Elements using JQuery////

function removeAPara(){
    $("#randPara p:last").remove();
}

function addAPara(){
    $("#randPara").append("<p>ADDED</p>");
}

function replaceWText(){
    $("#replaceWText").text("Never Replaced!");
}


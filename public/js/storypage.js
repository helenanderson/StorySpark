'use strict';
/* This javascript file is to control the buttons on the StoryPage 
 * where the individual story is displayed. */


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

//Adds click-listeners to the page for the various buttons
function initializePage() {
	console.log("Javascript connected!");
	$('#addBtn').click(addToStoryInit);
	$('#upVote').click(UpVote);
	$('#downVote').click(DownVote);

//This is just a little debugging code to log relevant info about the story.
// 	var story = $("#story1").text();
// 	//var numSentences = $(this.".sentences");
// 	//if (numSentences == 10) console.log("The Story is complete.");
// 	//else if (numSentences == 9) console.log("The Story has " + numSentences + "sentences.");
// 	console.log(story);
// }
}

/* Controls the addToStory button. Replaces the button with a form button and 
 * text box once clicked. Then listens for the form to be submitted, and once submitted
 * call the addToStory function (below).
 */
function addToStoryInit(e) {
	console.log("AddToStory button clicked.");
	var ID = window.location.pathname.match(/\/story\/(.*)/)[1];
	console.log(ID);
	$(this).replaceWith("<form id ='textToAddForm' method ='post' action = '/story/update/"+ID+"'><div class='form-group'><textarea name = 'text' id='textToAdd' style='width: 100%' rows='4' cols='40' maxlength='150' placeholder='What happens next?'></textarea><span class='count'></span></div><button id = 'submitBtn' type='submit'>Add!</button></form>");
	$('#textToAddForm').submit(addToStory);

	$(function() {
	    $("#textToAdd").characterCounter({
			counterCssClass: 'count',
			limit: 150,
			counterFormat: '%1 characters remaining.'
		});
 	});
	
}




/* Appends the text to the story, and parses it at the first sentence. Does not YET make a persistant
 * change to the story.
 */
function addToStory(e) {
	console.log("Add To Story Button clicked!");
	var newText = $("#textToAdd").val()

	// var q_index = newText.indexOf("\?");
	// var p_index = newText.indexOf(".");
	// var e_index = newText.indexOf("!");
	// var index = minimum(e_index, minimum(p_index, q_index));
	// if (index == -1) {
	// 	$("#text").text($("#text").text() + " " + newText + ".");
	// 	$("#textToAddForm").hide();
	// 	return;
	// }
	$("#textToAdd").val($("#text").text() + " " + newText);
	// index++;
	// newText = newText.substring(0, index);
	// $("#text").text($("#text").text() + " " + newText);
	//$("#textToAddForm").hide();
}



function UpVote(e) {
	// console.log("upvote");
	var votes = $("#votes").text();
	votes++;
	$("#votes").text(votes);
	$("#downVote").prop('disabled', false);
	$("#upVote").prop('disabled', true);
}

function DownVote(e) {
	// console.log("downvote");
	var votes = $("#votes").text();
	votes--;
	$("#votes").text(votes);
	$("#downVote").prop('disabled', true);
	$("#upVote").prop('disabled', false);
}

function minimum(num1, num2){
	if (num2 == -1) return num1;
	return (num1 != -1 && num1 < num2) ? num1:num2;

}
$(document).ready(function(){
  let onPageComments = new CommentList
  const $input = $("#input")
  $("#note-form").submit(function(e) {
      e.preventDefault()
      if ( $input.val() !== "") {
        onPageComments.addComment($input.val())
        $("#comment-list").html(onPageComments.render())
      } else {alert("Please make sure you have entered a comment!")}
      $input.val("")
    });
})


// last minute addition: not allowing empty string as a value in both cases.

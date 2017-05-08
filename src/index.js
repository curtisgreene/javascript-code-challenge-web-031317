$(document).ready(function(){
  var onPageComments = new CommentList
  $("#note-form").submit(function(e) {
      e.preventDefault()
      if (onPageComments.comments.length === 0 && $("#input").val() !== "") {
        onPageComments.addComment($("#input").val())
        $("#comment-list").append(onPageComments.render())
      } else if ($("#input").val() !== "") {
        var comment = new Comment($("#input").val())
        $("#comment-ul").append(comment.render())
      }
      $("#input").val("")
    });
})


// last minute addition: not allowing empty string as a value in both cases.

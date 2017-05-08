class CommentList {
  constructor() {
    this.comments = []
  }
  render() {
    var items = this.comments.map(function(comment) {return comment.render()}).join("")
    return `<ul id="comment-ul">${items}</ul>`
  }
  addComment(string) {
    this.comments.push(new Comment(string))
  }
}

class CommentList {
  constructor() {
    this.comments = []
  }
  render() {
    let items = this.comments.map( comment =>  (comment.render())).join("")
    return `<ul id="comment-ul">${items}</ul>`
  }
  addComment(string) {
    this.comments.push(new Comment(string))
  }
}

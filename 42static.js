class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComments(first, second) {
        return `${first.text} ${second.text}`
    }
}

const first = new Comment('Hello!')
const second = new Comment('World!')

console.log(Comment.mergeComments(first,second))
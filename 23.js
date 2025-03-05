const newPost = (post, addedAt = Date()) => (
    {
        ...post,
        addedAt
    }
)

const newPost = (post, addedAt = Date()) => {
    return {
        ...post,
        addedAt
    }
}

const LoremIpsum = require("./loremIpsum")

function posts (postsNumber) {
    const posts = [...Array(postsNumber)].map((post, i) => {
        return {
            id: i + 1,
            title: LoremIpsum.randomString(2, 5),
            description: LoremIpsum.randomString(20, 40),
            content: LoremIpsum.randomString(150,200),
            time: Date.now(),
            categories: [
                `animals`,
                `metals`
            ]
        }
    })
    return posts
}

module.exports = posts
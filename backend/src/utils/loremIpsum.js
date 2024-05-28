const LoremIpsum = {
    loremIpsum: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    categories: `animals books cars computers trees people plastic rubber metal solid liquid`,
    randomString(min = 1, max = 10, string = this.loremIpsum) {
        const textArray = string.split(' ')
        const selectedArray = []
        const randomWordsCount = Math.floor(Math.random() * (max - min + 1) + min)
        for (let i = 0; i < randomWordsCount; i++) {
            const rand = Math.floor(Math.random() * (textArray.length - min + 1) + min)
            let randomWord = textArray[rand]
            if (i == 0 && randomWord != undefined) randomWord = randomWord.charAt(0).toUpperCase() + randomWord.slice(1)
            if (randomWord == undefined) randomWord = 'Text'
            selectedArray.push(randomWord)
        }
        let finalString = selectedArray.join(' ')
        finalString = finalString + '.'

        return finalString
    }
}

module.exports = LoremIpsum
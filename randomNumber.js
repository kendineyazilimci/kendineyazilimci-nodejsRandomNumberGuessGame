const randomNumber = () => {
    const random = Math.random() * 100;
    const lastRandom = Math.round(random);
    return lastRandom;
}

module.exports = randomNumber;
const express = require('express');
const randomNumber = require('./randomNumber');
const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;

app.set('view engine', 'ejs');


router.get('/', (req, res) => {
    const dogruSayi = randomNumber();
    const yanlisSayi = randomNumber();
    const yanlisSayi1 = randomNumber();
    const yanlisSayi2 = randomNumber();

    let siklar = [dogruSayi, yanlisSayi, yanlisSayi1, yanlisSayi2];
    siklar.sort(() => Math.random() - 0.5);
    
    res.render('homePage.ejs', { dogruSayi: dogruSayi, hepsi: siklar});
});

app.use(express.static('public'));
app.use(router);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
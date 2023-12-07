const puppeteer = require('puppeteer');


const runScript = async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto('https://share.hsforms.com/1d9fBfmsdSjWt_qjMY4gJng4bml5?fbclid=IwAR3SkUsSdshC7U7nFJJYQuRCtNFTgNIvY_zMUX3ta19qmvsznociFavzoCk');

  await page.waitForTimeout(2000);
  
  await page.select(
    '#premio_educador_magico_2023___aplicacao_magica-input',
    'Valéria Vilas - Escola Municipal Arlindo Zaroni'
  );

  await page.type('#email-input', 'andre@gmail.com');

  await page.type('#cpf-input', '00000000000');

  await page.click('.hs-form__actions__submit');

  await browser.close();
}

const numIterations = 100;

for (let i = 0; i < numIterations; i++) {
  runScript();
}
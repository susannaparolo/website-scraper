const PORT = 8000
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express()

const url = 'https://www.clarks.co.uk/search/?text=shoes'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        var products = $('.product-thumbnail__product-price-info', html).each(function() {
            const title = $(this).find('.product-thumbnail__product-name content-shimmer').text();
            const 

            // const url = $(this).find('span').content()
            
        }) console.log(products)
    })

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))


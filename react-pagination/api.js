const express = require('express')
const app = express()
const port = 8081

app.get('/posts', (req, res) => {
    const page = req.query.page ? req.query.page : 1;
    const pageSize = req.query.pageSize ? req.query.pageSize : 5;
    const pageCount = 10;

    const items = []
    for(let i=0 ; i < pageSize ; ++i) {
        items.push({
            id: (page-1)*pageSize + i,
            title: `page: ${page}, item: ${i}`
        });
    }

    res.send({
        total_items: pageCount * pageSize,
        total_pages: pageCount,
        items: items
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
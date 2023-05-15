var express = require('express')
var app = express()

var port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/api/biodata', function(req, res) {
    const nama = req.body.name;
    const tempatLahir = req.body["tempat-lahir"];
    const tanggalLahir = req.body["tanggal-lahir"];
    const alamat = req.body.alamat;

    res.send({
        'nama': nama,
        'tempat-lahir': tempatLahir,
        'tanggal-lahir': tanggalLahir,
        'alamat': alamat,
    })
});

app.get('/biodata', function (req, res) {
    const nama = req.query.name;
    const tempatLahir = req.query["tempat-lahir"];
    const tanggalLahir = req.query["tanggal-lahir"];
    const alamat = req.query.alamat;

    res.send({
        'nama': nama,
        'tempat-lahir': tempatLahir,
        'tanggal-lahir': tanggalLahir,
        'alamat': alamat,
    })
})

var server = app.listen(8000, function(){
    console.log('Listening on Port 8000')
})
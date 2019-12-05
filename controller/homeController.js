exports.prosesPost = (req, res) => {

    let angka1 = parseInt(req.body.angka1)
    let angka2 = parseInt(req.body.angka2)
    let operator = req.body.operator

    var lambang = "";

    var hasil = 0;
    switch (operator) {
        case "+":
            hasil = angka1 + angka2
            lambang = "+"
            break;
        case "-":
            hasil = angka1 - angka2
            lambang = "-"
            break;
        case "*":
            hasil = angka1 * angka2
            lambang = "*"
            break;
        default:
            break;
    }

    res.send(`Hasil Perhitungan ${angka1} ${lambang} ${angka2} = ${hasil}`)

}
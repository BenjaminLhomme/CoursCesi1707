/*************************/
/*** Import used modules */


/*****************************************/
/*** Unit route for Roger resource */

exports.getAllRogers = (req, res) => {
    return res.json({ message: "All roger" })
}

exports.getRoger = async (req, res) => {
    let pid = parseInt(req.params.id)

    return res.json({ message: `One roger id ${pid}` })
}

exports.addRoger = async (req, res) => {
    return res.json({ message: 'Roger Created'})
}

exports.updateRoger = async (req, res) => {
    let pid = parseInt(req.params.id)

    return res.json({ message: `Roger id:${pid} Updated`})
}

exports.deleteRoger =  (req, res) => {
    let pid = parseInt(req.params.id)

    return res.status(204).json({})
}
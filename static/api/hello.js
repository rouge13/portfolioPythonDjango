export default (req, res) => {
    // const name = req.query.name
    // if (name) {
    //     res.json(successObj({
    //         hello: name
    //     }))
    // } else {
    //     res.status(400)
    //     res.json(errorObj('no_name'))
    // }
    res.json({
        // req param of the query : body -> post and query -> get
        body: req.body,
        query: req.query
    })
}
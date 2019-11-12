module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get("db");
        db.gethouses()
        .then(houses => res.status(200).send(houses))
        .catch(err => console.log(err))
    },

    addHouse: (req, res) => {
        const db = req.app.get("db"),
        {name, address, city, state, zip, img, mortgage, rent} = req.body;
        db.add_house (name, address, city, state, +zip, img, +mortgage, +rent)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
    },

    deleteHouse: (req, res) => {
        const db = req.app.get("db"),
        {id} = req.params;
        db.delete_house(id).then(() => {
            res.sendStatus(200);
        })
    }
}
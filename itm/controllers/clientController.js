const Client = require('../models/Client');

exports.createClient = async (req, res) => {
    const { name, email, phone, address, companyName, taxIdentifier, notes } = req.body;

    try {
        const client = new Client({
            userId: req.user.id,
            name,
            email,
            phone,
            address,
            companyName,
            taxIdentifier,
            notes
        });

        await client.save();
        res.status(201).json(client);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find({ userId: req.user.id });
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

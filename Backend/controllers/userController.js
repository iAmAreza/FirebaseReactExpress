const { db } = require("../config/firebase");

// Get Users from Firestore Collection "1904016"
const getUsers = async (req, res) => {
  try {
    const snapshot = await db.collection("1904016").get();
    let users = [];
    snapshot.forEach(doc => users.push({ id: doc.id, ...doc.data() }));
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a User to Firestore Collection "1904016"
const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await db.collection("1904016").add({ name, email });
    res.status(201).json({ id: newUser.id, name, email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUsers, addUser };

const express = require("express");
const {
    getUserData,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/api-controller")




const router = express.Router();


router.get('/users', getUserData);
router.post('/users', createUser);
router.put('/users/:email', updateUser);
router.delete('/users/:email', deleteUser);



module.exports = router;
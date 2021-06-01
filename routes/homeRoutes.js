const router = require('express').Router();
const path = require ('path'); 

router.get('/',  (req,res) => {
    try {
        res.sendFile(path.join(dirname, '../public/index.html'));
    } catch (err){
        res.status(500).json(err);
    };

});

router.get('/stats', (req,res) => {
    try {
        res.sendFile(path.join(dirname, '../public/exercise.html'));
    } catch (err) {
        res.status(500).json(err);
    };
});

router.get('/exercise', (req,res) => {
    try {
        res.sendFile(path.join(dirname, '../public/exercise.html'));
    } catch (err) {
        res.status(500).json(err); 
    };
});

module.exports = router; 
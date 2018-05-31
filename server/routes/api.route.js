import express from 'express';
import {ipr} from '../controllers/ipr.controller';
const router = express.Router(); // eslint-disable-line new-cap

router.get('/test', function (req, res) {
    var ret = { text: "api is ok", colors: ["red", "blue", "gray", "green", "black", "pink"] };
    res.json(ret);
});
router.route('/ipr')
    .post(ipr)
export default router;

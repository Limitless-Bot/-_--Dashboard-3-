const express = require('express')
const config = require('../../config.json')
const authClient = require('../auth-client')

const router = express.Router();

router.get('/login', (req, res) => 
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${client.bot.id}&redirect_uri=${config.dashboardURL}/auth&response_type=code&scope=identify%20guilds`));

    router.get('/auth?code=', async (req, res) => {
    try {
        const code = req.query.code;
        console.log(code)
        const key = await authClient.getAccess(code)

        res.cookies.set('key', key)
        res.redirect('/dashboard'); 
    } catch {
        res.render('/');
    }
});



module.exports = router;
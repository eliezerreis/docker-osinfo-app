const os = require('os');
const express = require('express');
const router = express.Router();

const ipv4List = () => {
    let ips = []
    for (let key in os.networkInterfaces()) {
        let nic = os.networkInterfaces()[key];
        nic.forEach((config) => {
            if (config.family === 'IPv4' && config.address !== '127.0.0.1')
                ips.push(config.address);
        });
    }

    return ips;
}

router.get('/info', function (req, res) {
    let ipv4 = ipv4List();

    let data = [
        {key: 'hostname', value: os.hostname()},
        {key: 'cpus cores', value: os.cpus().length},
        {key: 'model', value: os.cpus()[0].model},
        {key: 'arch', value: os.arch()},
        {key: 'totalmem', value: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + ' GiB'},
        {key: 'freemem', value: (os.freemem() / 1024 / 1024).toFixed(2) + ' MiB'},
        {key: 'percentage', value: ((os.freemem() * 100) / os.totalmem()).toFixed(2) + ' %'},
        {key: 'ip', value: ipv4},
        {key: 'platform', value: os.platform()},
        {key: 'type', value: os.type()},
        {key: 'uptime', value: (os.uptime() / 3600).toFixed(2) + 'hr'},
        {key: 'uptime', value: (os.uptime() / (3600*24)).toFixed(2) + 'days'},
    ];

    res.send(JSON.stringify(data));
});

module.exports = router;

module.exports = {
    //database configuration
    "connection": {
        "SW_PBB": {
            "database": process.env.SW_PBB_DATABASE,
            "username": process.env.SW_PBB_USER,
            "password":  process.env.SW_PBB_PASS,
            "host": process.env.SW_PBB_HOST,
            "port": process.env.SW_PBB_PORT,
            "dialect": "mysql"
        },
        "GW_PBB": {
            "database": process.env.GW_PBB_DATABASE,
            "username": process.env.GW_PBB_USER,
            "password":  process.env.GW_PBB_PASS,
            "host": process.env.GW_PBB_HOST,
            "port": process.env.GW_PBB_PORT,
            "dialect": "mysql"
        },
    },
}
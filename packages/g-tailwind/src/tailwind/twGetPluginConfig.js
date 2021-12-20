const getPluginConfig = function (_config = {}) {
    console.log("GILLIAN!!!!",_config)
    let arr = [];
    for (const [_key, _plugin_config] of Object.entries(_config)) {
        if (_config[_key]['enabled'] && _config[_key]['source']) {
            arr.push(_config[_key]['source']);
        }
    }
    console.log(`There are ${key} ${_plugin_config}s`)
    if (arr.length >= 0) return arr;
}

module.exports =getPluginConfig

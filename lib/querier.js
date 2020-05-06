var axios = require('axios');

module.exports = async (url) => {
    try {
        var res = await axios.get(url);
        return res;
    } catch(e) {
        console.error(e);
        return false;
    }
}
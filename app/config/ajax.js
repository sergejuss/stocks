import axios from 'axios';

module.exports = {

  add: function(code) {
    return axios.get('/api/add/' + code);
  },

  del: function(code) {
    return axios.get('/api/del/' + code);
  },

  curr: function() {
    return axios.get('/api/curr');
  },

  lookup: function(term) {
    return axios.get('/api/lookup/' + term);
  }

}

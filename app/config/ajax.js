import axios from 'axios';

module.exports = {

  yelp_ajax: function(location) {
    return axios.get('/api/' + location)
  },

  user_auth_ajax: function(location) {
    return axios.get('/user/' + location)
  },

  update_user_bars: function(action, bar) {
    if (action === 'add') {
      return axios.get('/user_bars/add/' + bar)
    } else if (action === 'delete') {
      return axios.get('/user_bars/delete/' + bar)
    }
  }

}

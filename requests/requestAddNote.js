// const firebase = require ('firebase');
// const { facebookProvider, auth, database } = require('firebase');
const {ADDNOTEURL} = require('../config');
const axios = require('axios');

function addNote (data) {
  const note = {
      created: Date.now(),
      title: data.title || 'Note created at ' + Date.now(),
      text: data.text,
      tags: [...data.tags] || [],
      lastEditTime: Date.now(),
      // TODO: Enable authentication
      // userId: firebase.auth().currentUser.uid
      userId: 'ExkVJBLKOthqpycAiAdkAHdvPfA3'
  };

return axios.post(`${ADDNOTEURL}`, note)
  .then((response) => {
      note.key = response.key;
    })

  .catch((error) => {
    console.log(error);
  });
}

module.exports = addNote;
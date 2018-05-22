'use strict';

module.exports = {
    LoginWithValidUserPasswd: {
        'Valid Username/Password': {username: 'rohitnegi', password: 'Test@12345', answer: 'dehradun'},
        //'Invalid Username/Correct Password': {username: 'testuser', password: 'Test@12345', answer: 'kusum'},
        //'Invalid Username/Invalid Password': {username: 'testuser', password: 'Test@1234', answer: 'kusum'},
        //'Valid Username/Invalid Password': {username: 'rohitnegi', password: 'Test@1234', answer: 'kusum'}
    },

    LoginWithInvalidUserPasswd: {
       // 'Valid Username/Password': {username: 'rohitnegi', password: 'Test@12345', answer: 'dehradun'},
        'Invalid Username/Password': {username: 'testuser', password: 'Test@12345', answer: 'kusum'},
        //'Invalid Username/Invalid Password': {username: 'testuser', password: 'Test@1234', answer: 'kusum'},
        //'Valid Username/Invalid Password': {username: 'rohitnegi', password: 'Test@1234', answer: 'kusum'}
    }

   
}
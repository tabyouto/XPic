'use strict';
export default function() {
  var urlObj = {
    dev: {
      api: '',
      toLoginUrl:''
    },
    test: {
      api: 'http://localhost/api.php',
      toLoginUrl:''
    },
    release: {
      api: '',
      toLoginUrl:''
    }
  };
  var environment = 'test';
  return urlObj[environment];
}

(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error('No remote URL supplied');
    }

    this.serviceUrl = url;
  };

  RemoteDataStore.prototype.add = function (key, val) {
    $.post(this.serviceUrl, val, function (serverResponse) {
      console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.getAll = function (cb) {
    $.get(this.serviceUrl, function (serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.get = function (key, cb) {
    $.get(this.serviceUrl + '/' + key, function (serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    })
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
}(window));

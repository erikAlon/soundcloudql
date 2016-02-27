import { expect } from 'chai';
import { describe, it } from 'mocha';
import { soundcloud } from './soundcloudql';

/* eslint-disable max-len */

describe('Search type', function () {
  it('Searches for tracks', function () {
    var query = `{ searchTracks(q: "Boiler Room", limit: 2) { collection { title } }}`;
    return soundcloud(query).then(function (result) {
      expect(result.data.searchTracks.collection[0].title).to.equal('Carl Cox 45 min Boiler Room Ibiza Villa Takeovers mix');
    });
  });

  it('Searches for users', function () {
    var query = `{ searchUsers(q: "Eric", limit: 2) { collection { username } }}`;
    return soundcloud(query).then(function (result) {
      expect(result.data.searchUsers.collection[0].username).to.equal('Eric Prydz');
    });
  });
});
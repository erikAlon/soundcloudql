import { expect } from 'chai';
import { describe, it } from 'mocha';
import { soundcloud } from './soundcloudql';

/* eslint-disable max-len */

describe('Playlist type', function () {
  it('Gets an object by id', function () {
    var query = '{ playlist(id: 6584580) { title }}';
    return soundcloud(query).then(function (result) {
      expect(result.data.playlist.title).to.equal('Quarters');
    });
  });

  it('Gets all properties', function () {
    var query = `
{
  playlist(id: 6584580) {
    id
    title
    createdAt
    permalinkUrl
    description
    artworkUrl
    duration
    tracksCount
    userConnection { username }
    tracksCollection(limit: 1) { collection { title } }
  }
}`;
    var expected = {
      id: '6584580',
      title: 'Quarters',
      createdAt: '2013/06/10 16:23:37 +0000',
      permalinkUrl: 'http://soundcloud.com/seams/sets/quarters',
      description: 'My first full-length album, released by Full Time Hobby; available on vinyl, CD, and download.\r\n\r\nPurchase the album from Bleep.com and get an exclusive set of postcards showcasing the 4 locations the album was made.\r\n\r\nhttps://bleep.com/release/45240-seams-quarters',
      artworkUrl: 'https://i1.sndcdn.com/artworks-000052432909-2isoof-large.jpg',
      duration: 2397683,
      tracksCount: 8,
      userConnection: { username: 'Seams' },
      tracksCollection: {
        collection: [
          { title: 'ClapOne' }
        ]
      }
    };
    return soundcloud(query).then(function (result) {
      expect(result.data.playlist).to.deep.equal(expected);
    });
  });
});

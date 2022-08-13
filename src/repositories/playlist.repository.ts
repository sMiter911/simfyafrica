import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SimfyafricaDataSource} from '../datasources';
import {Playlist, PlaylistRelations, Tracks} from '../models';

export class PlaylistRepository extends DefaultCrudRepository<
  Playlist,
  typeof Playlist.prototype.id,
  PlaylistRelations
> {
  constructor(
    @inject('datasources.simfyafrica') dataSource: SimfyafricaDataSource,
  ) {
    super(Playlist, dataSource);
  }

  async addTracks(id: string, tracks: Tracks) {
    const playlist = await this.findById(id).then(data => {
      data.trackList?.push(tracks);
      return data;
    });
    return this.replaceById(id, playlist);
  }
}

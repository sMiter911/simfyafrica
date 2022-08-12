import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SimfyafricaDataSource} from '../datasources';
import {Playlist, PlaylistRelations} from '../models';

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
}

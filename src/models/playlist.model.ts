import {Entity, model, property} from '@loopback/repository';

@model()
export class Playlist extends Entity {
  @property({
    type: 'string',
    id: true,
    mongodb: {dataType: 'ObjectId'},
  })
  id: string;

  @property({
    type: 'string',
  })
  name: string;

  @property({
    type: 'string',
  })
  creator: string;

  @property({
    type: 'string',
    default: '00:00',
  })
  playtime?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  trackList?: object[];

  constructor(data?: Partial<Playlist>) {
    super(data);
  }
}

export interface PlaylistRelations {
  // describe navigational properties here
}

export type PlaylistWithRelations = Playlist & PlaylistRelations;

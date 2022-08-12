import {Entity, model, property} from '@loopback/repository';

@model()
export class Tracks extends Entity {
  @property({
    type: 'string',
    id: true,
    mongodb: {dataType: 'ObjectId'},
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  album: string;

  @property({
    type: 'string',
    required: true,
  })
  artist: string;

  @property({
    type: 'string',
    default: '00:00',
  })
  duration?: string;

  @property({
    type: 'string',
  })
  artwork?: string;

  @property({
    type: 'string',
  })
  audio?: string;

  constructor(data?: Partial<Tracks>) {
    super(data);
  }
}

export interface TracksRelations {
  // describe navigational properties here
}

export type TracksWithRelations = Tracks & TracksRelations;

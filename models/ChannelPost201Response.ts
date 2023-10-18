/**
 * FAST Engine Orchestrator
 * Microservice to orchestrate FAST Engine channel instances
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ChannelPostRequestOpts } from '../models/ChannelPostRequestOpts';
import { HttpFile } from '../http/http';

export class ChannelPost201Response {
    /**
    * Channel Id
    */
    'id': string;
    /**
    * Name of the channel
    */
    'name': string;
    'type': ChannelPost201ResponseTypeEnum;
    /**
    * URL to playlist or VOD to loop
    */
    'url': string;
    'opts'?: ChannelPostRequestOpts;
    /**
    * Playback URL
    */
    'playback': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ChannelPost201ResponseTypeEnum",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "opts",
            "baseName": "opts",
            "type": "ChannelPostRequestOpts",
            "format": ""
        },
        {
            "name": "playback",
            "baseName": "playback",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ChannelPost201Response.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ChannelPost201ResponseTypeEnum {
    Loop = 'Loop',
    Playlist = 'Playlist',
    WebHook = 'WebHook'
}


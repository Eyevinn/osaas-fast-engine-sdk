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

import { HttpFile } from '../http/http';

export class ChannelPostRequestOptsPreroll {
  /**
   * URL to preroll
   */
  'url': string;
  /**
   * Duration of preroll in milliseconds
   */
  'duration': number;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: 'url',
      baseName: 'url',
      type: 'string',
      format: ''
    },
    {
      name: 'duration',
      baseName: 'duration',
      type: 'number',
      format: ''
    }
  ];

  static getAttributeTypeMap() {
    return ChannelPostRequestOptsPreroll.attributeTypeMap;
  }

  public constructor() {}
}

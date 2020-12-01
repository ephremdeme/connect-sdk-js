/**
 * 1Password Connect
 * API interface for the 1Password Connect server.
 *
 * The version of the OpenAPI document: 0.2.3
 * Contact: support@1password.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class ItemVault {
    'id': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ItemVault.attributeTypeMap;
    }
}


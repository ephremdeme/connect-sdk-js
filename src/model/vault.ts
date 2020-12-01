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

export class Vault {
    'id'?: string;
    'name'?: string;
    'description'?: string;
    /**
    * The vault version
    */
    'attributeVersion'?: number;
    /**
    * The version of the vault contents
    */
    'contentVersion'?: number;
    /**
    * Number of active items in the vault
    */
    'items'?: number;
    'type'?: Vault.TypeEnum;
    'createdAt'?: Date;
    'updatedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "attributeVersion",
            "baseName": "attributeVersion",
            "type": "number"
        },
        {
            "name": "contentVersion",
            "baseName": "contentVersion",
            "type": "number"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Vault.TypeEnum"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return Vault.attributeTypeMap;
    }
}

export namespace Vault {
    export enum TypeEnum {
        UserCreated = <any> 'USER_CREATED',
        Personal = <any> 'PERSONAL',
        Everyone = <any> 'EVERYONE',
        Transfer = <any> 'TRANSFER'
    }
}

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
import { ItemUrls } from './itemUrls';
import { ItemVault } from './itemVault';

export class Item {
    'id'?: string;
    'title'?: string;
    'vault': ItemVault;
    'category': Item.CategoryEnum;
    'urls'?: Array<ItemUrls>;
    'favorite'?: boolean;
    'tags'?: Array<string>;
    'version'?: number;
    'trashed'?: boolean;
    'createdAt'?: Date;
    'updatedAt'?: Date;
    'lastEditedBy'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "vault",
            "baseName": "vault",
            "type": "ItemVault"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "Item.CategoryEnum"
        },
        {
            "name": "urls",
            "baseName": "urls",
            "type": "Array<ItemUrls>"
        },
        {
            "name": "favorite",
            "baseName": "favorite",
            "type": "boolean"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "trashed",
            "baseName": "trashed",
            "type": "boolean"
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
        },
        {
            "name": "lastEditedBy",
            "baseName": "lastEditedBy",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Item.attributeTypeMap;
    }
}

export namespace Item {
    export enum CategoryEnum {
        Login = <any> 'LOGIN',
        Password = <any> 'PASSWORD',
        Server = <any> 'SERVER',
        Database = <any> 'DATABASE',
        CreditCard = <any> 'CREDIT_CARD',
        Membership = <any> 'MEMBERSHIP',
        Passport = <any> 'PASSPORT',
        SoftwareLicense = <any> 'SOFTWARE_LICENSE',
        OutdoorLicense = <any> 'OUTDOOR_LICENSE',
        SecureNote = <any> 'SECURE_NOTE',
        WirelessRouter = <any> 'WIRELESS_ROUTER',
        BankAccount = <any> 'BANK_ACCOUNT',
        DriverLicense = <any> 'DRIVER_LICENSE',
        Identity = <any> 'IDENTITY',
        RewardProgram = <any> 'REWARD_PROGRAM',
        Document = <any> 'DOCUMENT',
        EmailAccount = <any> 'EMAIL_ACCOUNT',
        SocialSecurityNumber = <any> 'SOCIAL_SECURITY_NUMBER',
        Custom = <any> 'CUSTOM'
    }
}

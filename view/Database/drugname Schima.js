/* eslint-disable prettier/prettier */
import Realm from 'realm';

// Declare Schema
class drugsSchema extends Realm.Object {}
class ProcessSchima extends Realm.Object {}
class CompanySchema extends Realm.Object {}
class langSchema extends Realm.Object {}
class barcodeSchema extends Realm.Object {}
barcodeSchema.schema = {
  name: 'barcode',
  properties: {

    drugname: 'string',
    barcode: 'string',
  },
};
CompanySchema.schema={
  name: 'company',
  properties: {
    name:'string',

  },
}
ProcessSchima.schema = {
  name: 'process',
  primaryKey: 'id',
  properties: {
    id:'string',
    process: 'string',
    drugname: 'string',
    quantity: 'string',
    price: 'string',
    Date: 'string',
    companyname: 'string',
    BuyCode: 'string',
  },
};
drugsSchema.schema = {
  name: 'drugs',
  properties: {
    drugname: 'string',
    quantity: 'string',
    price: 'string',

  },
};
langSchema.schema = {
  name: 'lang',

  properties: {
    lang:'string'
  },
};
// eslint-disable-next-line prettier/prettier
// Create realm
let GeneralSchiam = new Realm({
  schema: [
    drugsSchema,
    ProcessSchima,
    CompanySchema,
    langSchema,
    barcodeSchema
  ],
  schemaVersion: 1,
  deleteRealmIfMigrationNeeded: true,
});

export default GeneralSchiam;



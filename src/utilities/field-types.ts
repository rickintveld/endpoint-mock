export default class FieldTypes {
    private choices: Array<string> = [
      'boolean',
      'buildingNumber',
      'card_expiration',
      'card_number',
      'card_type',
      'city',
      'company_name',
      'counter',
      'country',
      'countryCode',
      'country_code',
      'date',
      'dateTime',
      'ean',
      'email',
      'firstName',
      'image',
      'lastName',
      'latitude',
      'longText',
      'longitude',
      'name',
      'null',
      'number',
      'phone',
      'postcode',
      'state',
      'streetAddress',
      'streetName',
      'text',
      'uuid',
      'vat',
      'website',
      'word',
    ];

    public get(): Array<string> {
      return this.choices
    }
}

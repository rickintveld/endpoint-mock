# Mock API endpoints

# Usage

```sh-session
$ ./bin/run endpoint
Answer the questions...

Response URL
https://fakerapi.it/api/v1/custom?_quantity=2&firstName=firstName&lastName=lastName&city=city&country=country&postcode=postcode

Response object
{
    "status": "OK",
    "code": 200,
    "total": 2,
    "data": [
        {
            "firstName": "Madilyn",
            "lastName": "Pfeffer",
            "city": "South Malachimouth",
            "country": "Greenland",
            "postcode": "45850"
        },
        {
            "firstName": "Godfrey",
            "lastName": "Cole",
            "city": "Beermouth",
            "country": "Macao",
            "postcode": "34103"
        }
    ]
}
```

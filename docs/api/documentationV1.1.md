**Lets improve backend API's**

# To know before using the API

Please use HTTPS to communicate with the API.

The domain name `api.fidelight.fr` is redirecting (status 302) on `fidelightapp-314712.ew.r.appspot.com`. If you have issues using the first one you can use the second.

# Hot Deals API

Get most used 6 hot deals in the city

**URL** : `https://api.fidelight.fr/v1/discounts/hotdeals`

**Method** : `POST`

**Auth required** : NO

## Request Format

**Body**

```json
{
  "city": "Paris"
}
```

## Success Response

```json
{
  "data": [
    {
      "dealId": 7328,
      "image": "https://images.unsplash.com/photo-1544502779-9d192f5da63e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2045&q=80",
      "title": "Upto 30% OFF ",
      "shortDescription": "on every pasta today"
    },
    {
      "dealId": 1621,
      "image": "https://images.unsplash.com/photo-1619454016518-697bc231e7cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "title": "Upto 25% OFF ",
      "shortDescription": "on every medium coffee today"
    },
    {
      "dealId": 8595,
      "image": "https://images.unsplash.com/photo-1527133256227-fc3549f55332?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "title": "Upto 40% OFF ",
      "shortDescription": "on every pizza coffee today"
    },
    {
      "dealId": 9182,
      "image": "https://images.unsplash.com/photo-1502303122794-aba2d55cc873?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1088&q=80",
      "title": "Upto 10% OFF ",
      "shortDescription": "on every medium coffee today"
    }
  ]
}
```

# Companies (List) API

Get Restaurants list based on company type

**URL** : `https://api.fidelight.fr/v1/companies`

**Method** : `POST`

**Auth required** : NO

## Request Format

**Body**

```json
{
  "city": "Paris",
  "companyTypeId": 1267
}
```

## Success Response

```json
{
  "data": [
    {
      "id": 6787,
      "coverImage": "https://images.unsplash.com/photo-1572103900992-23b4bb92e6e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "logo": "https://images.unsplash.com/photo-1544502779-9d192f5da63e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2045&q=80",
      "name": "Laziz sushi",
      "shortDescription": "Japaneese, Sushi, Fish",
      "typeId": 1267
    },
    {
      "id": 8263,
      "coverImage": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "logo": "https://images.unsplash.com/photo-1542488246-1390a9a99a30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "name": "Pizza hut",
      "shortDescription": "Japaneese, Pizza fries",
      "typeId": 1267
    },
    {
      "id": 1283,
      "coverImage": "https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "logo": "https://images.unsplash.com/photo-1541980294979-572cb9d973fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1705&q=80",
      "name": "Burrito",
      "shortDescription": "Japaneese, Sushi, Fish",
      "typeId": 1267
    }
  ]
}
```

# Company Details API

Get company details

**URL** : `https://api.fidelight.fr/v1/companyDetail`

**Method** : `POST`

**Auth required** : NO

## Request Format

**Body**

```json
{
  "city": "Paris",
  "companyId": 1231
}
```

## Success Response

```json
{
  "data":{
      "id": 1231,
      "coverImage": "https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "logo": "https://images.unsplash.com/photo-1541980294979-572cb9d973fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1705&q=80",
      "name": "Burrito",
      "type":"Food",
      "typeId":3423,
      "address": "7 bis Rue de Boulainvilliers, 75016 Paris, France"
      "phone":"+423432532672",
      "website":"www.katsui.com"
  }
}


# Error Response

Code | Solution
--- | ---
`500 Internal server error` | Something happened on the server side. Try again later.
`400 Bad request` | Verify the format of the query.
`401 Unauthorized` | Provide an access token or refresh it using the refreshing route and the refrresh token.
`403 Forbidden` | The access token does not allow you to do this action
`409 Conflict` | The email is already registered. Try with another one.
`410 Gone` | Verify the logs, usually happens when db query fails.
```

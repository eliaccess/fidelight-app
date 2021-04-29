# Register a user

**URL** : `https://api.fidelight.com/v1/user/register`

**Method** : `POST`

**Auth required** : NO

## Request Format

**Content example**

```json
{
  "surname": "Jeff",
  "name": "Dos Santos",
  "phone": "0605040302",
  "password": "this_is_a_password_12",
  "email": "jeff.dos-santos@gmail.com",
  "birthdate": "1995-05-21"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "id": 2,
  "qr_key": "aLFO1AlBdL",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gR9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Error Response

//

# Unregister a user

**URL** : `https://api.fidelight.com/v1/user/register`

**Method** : `DELETE`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

## Error Response

//

# Register a user through Google OAuth2.0

**URL** : `https://api.fidelight.com/v1/user/register/gauth`

**Method** : `GET`

**Auth required** : NO

## Request Format

**Content example**
To define

## Success Response

**Code** : `200 OK`

## Error Response

//

# Register a user through Facebook OAuth2.0

**URL** : `https://api.fidelight.com/v1/user/register/fauth`

**Method** : `GET`

**Auth required** : NO

## Request Format

**Content example**
To define

## Success Response

**Code** : `200 OK`

## Error Response

//

# Change the password of a user

**URL** : `https://api.fidelight.com/v1/user/password/`

**Method** : `PUT`

**Auth required** : YES

## Request Format

**Content example**

```json
{
  "previous_password": "this_is_a_password_12",
  "password": "this_is_a_password_13"
}
```

## Success Response

**Code** : `200 OK`

## Error Response

//

# Login a user

**URL** : `https://api.fidelight.com/v1/user/login/`

**Method** : `POST`

**Auth required** : NO

## Request Format

**Content example**

```json
{
  "email": "jeff.dos-santos@gmail.com",
  "password": "this_is_a_password_13",
  "google_token": null,
  "google_token": null
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "id": 2,
  "qr_key": "aLFO1AlBdL",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gR9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Error Response

//

# Get the profile of a user

**URL** : `https://api.fidelight.com/v1/user/profile/`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "surname": "Jeff",
  "name": "Dos Santos",
  "phone": "0605040302",
  "email": "jeff.dos-santos@gmail.com",
  "birthdate": 1995 - 05 - 21
}
```

## Error Response

//

# Edit the profile of a user

**URL** : `https://api.fidelight.com/v1/user/profile/`

**Method** : `PUT`

**Auth required** : YES

## Request Format

**Content example**

```json
{
  "surname": "Jeff",
  "name": "Dos Santos",
  "phone": "0605040302",
  "email": "jeff.dos-santos@gmail.com",
  "birthdate": 1995 - 05 - 21
}
```

## Success Response

**Code** : `200 OK`

## Error Response

//

# Get the balance of a user in a company

**URL** : `https://api.fidelight.com/v1/user/balance/$company_id`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "balance": 650
}
```

## Error Response

//

# Get the last transactions of a user

**URL** : `https://api.fidelight.com/v1/company/transaction`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "transactions": [
    {
      "id": 2,
      "discount": 654,
      "value": 800,
      "date": "2021-01-02T09:34:12.648Z",
      "nb_used": 1
    },
    {
      "id": 18,
      "discount": null,
      "value": 120,
      "date": "2021-01-01T10:39:14.698Z",
      "nb_used": 1
    }
  ]
}
```

## Error Response

//

# Get company types

**URL** : `https://api.fidelight.com/v1/company/type`

**Method** : `GET`

**Auth required** : NO

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "types": [
    {
      "id": 1,
      "title": "Bakery",
      "description": "A place that sells some nice bread."
    },
    {
      "id": 2,
      "title": "Restaurant",
      "description": "A shop where food is cooked and sold to feast."
    }
  ]
}
```

## Error Response

//

# Register a company

**URL** : `https://api.fidelight.com/v1/company/register`

**Method** : `POST`

**Auth required** : NO

## Request Format

**Content example**

```json
{
  "name": "Coffee Shop Petunia",
  "password": "this_is_a_password_12",
  "email": "jeff.dos-santos@gmail.com",
  "description": "Perfect Coffee is your coffee shop since 1989 ...",
  "phone": "0605040302",
  "company_type": 5,
  "country": "France",
  "city": "Paris",
  "street_name": "Rue du Paprika",
  "street_number": 357
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "id": 7,
  "login": "coffeeshop12",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gR9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Error Response

//

# Unregister a company

**URL** : `https://api.fidelight.com/v1/company/register`

**Method** : `DELETE`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

## Error Response

//

# Login as a company

**URL** : `https://api.fidelight.com/v1/company/login`

**Method** : `POST`

**Auth required** : NO

## Request Format

**Content example**

```json
{
  "password": "this_is_a_password_12",
  "email": "jeff.dos-santos@gmail.com"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "id": 7,
  "login": "coffeeshop12",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gR9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Error Response

//

# Change the password of a company

**URL** : `https://api.fidelight.com/v1/company/password`

**Method** : `PUT`

**Auth required** : YES

## Request Format

**Content example**

```json
{
  "previous_password": "this_is_a_password_12",
  "password": "this_is_a_password_13"
}
```

## Success Response

**Code** : `200 OK`

## Error Response

//

# Get the profile of a company

**URL** : `https://api.fidelight.com/v1/company/profile/$company.id`

**Method** : `GET`

**Auth required** : YES, as a user or as a company.

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "name": "Coffee Shop Petunia",
  "description": "Perfect Coffee is your coffee shop since 1989 ...",
  "phone": "0605040302",
  "company_type": 5,
  "country": "France",
  "city": "Paris",
  "street_name": "Rue du Paprika",
  "street_number": 357,
  "logo": "https://fidelight.com/pictures/cofee_shop_petunia_16515.jpg",
  "background_picture": "https://fidelight.com/pictures/cofee_shop_petunia_16514.jpg"
}
```

## Error Response

//

# Edit the profile of a company

**URL** : `https://api.fidelight.com/v1/company/profile`

**Method** : `PUT`

**Auth required** : YES

## Request Format

**Content example**

```json
{
  "email": "jeff.dos-santos@gmail.com",
  "description": "Perfect Coffee is your coffee shop since 1989 ...",
  "phone": "0605040302",
  "company_type": 5,
  "country": "France",
  "city": "Lyon",
  "street_name": "Rue du Chameau",
  "street_number": 15
}
```

## Success Response

**Code** : `200 OK`

## Error Response

//

# Get earning policy types

**URL** : `https://api.fidelight.com/v1/points/type`

**Method** : `GET`

**Auth required** : YES, as a user or a company.

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "types": [
    {
      "id": 1,
      "title": "Points per visit",
      "description": "Give the customer an amount of fidelity points every time he visits you!"
    },
    {
      "id": 2,
      "title": "Percentage of the price",
      "description": "Give back fidelity points to the customer based on the price he just paid."
    }
  ]
}
```

## Error Response

//

# Get the earning policy of a company

**URL** : `https://api.fidelight.com/v1/company/points/$company.id`

**Method** : `GET`

**Auth required** : YES, as a user or a company.

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "type": 1,
  "value": 15
}
```

## Error Response

//

# Edit the earning policy of a company

**URL** : `https://api.fidelight.com/v1/company/points`

**Method** : `PUT`

**Auth required** : YES

## Request Format

**Content example**

```json
{
  "type": 1,
  "value": 15
}
```

## Success Response

**Code** : `200 OK`

## Error Response

//

# Give points to a user

**URL** : `https://api.fidelight.com/v1/company/points/use/$user.id`

**Method** : `POST`

**Auth required** : YES

## Request Format

**Content example**

```json
{
  "qr_key": "aLFO1AlBdL",
  "company": 3,
  "points": 100
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "transaction": 56464
}
```

## Error Response

//

# Undo a transaction with a user

**URL** : `https://api.fidelight.com/v1/company/points/use/$transaction.id`

**Method** : `DELETE`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

## Error Response

//

# Get offers / discount types

**URL** : `https://api.fidelight.com/v1/company/discount/$discount.id`

**Method** : `GET`

**Auth required** : YES, as a user or a company.

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "types": [
    {
      "id": 1,
      "title": "Free ticket",
      "description": "The custommer will have a free prestation next time he will be visiting your shop!"
    },
    {
      "id": 2,
      "title": "Percentage of the price",
      "description": "The custommer will have a discount that values a percent (that your can define) of the price."
    }
  ]
}
```

## Error Response

//

# Post an offer or a discount

**URL** : `https://api.fidelight.com/v1/company/discount/`

**Method** : `POST`

**Auth required** : YES

## Request format

**Content example**

```json
{
  "company": 9,
  "discount_type": 2,
  "nb_max": null,
  "cost": 200,
  "name": "-4€ on the kebabs",
  "description": "Pay your kebab 3 euros instead of 7 in your Perfect Coffee shop !",
  "product": "Kebab",
  "start_date": null,
  "expiration_date": null,
  "per_day": [
    "monday": 0,
    "tuesday": 1,
    "wednesday": 0,
    "thursday": 1,
    "friday": 0,
    "saturday": 1,
    "sunday": 1
    ],
  "value": 5.0
}
```

## Success Response

**Code** : `200 OK`

## Error Response

//

# Edit an offer or a discount

**URL** : `https://api.fidelight.com/v1/company/discount/$discount.id`

**Method** : `PUT`

**Auth required** : YES

## Request format

**Content example**

```json
{
  "discount_type": 3,
  "nb_max": null,
  "cost": 250,
  "name": "-4€ on the tacos",
  "description": "Pay your tacos 3 euros instead of 7 in your Perfect Coffee shop !",
  "product": "Tacos",
  "start_date": null,
  "expiration_date": null,
  "per_day": [
    "monday": 1,
    "tuesday": 1,
    "wednesday": 0,
    "thursday": 1,
    "friday": 0,
    "saturday": 1,
    "sunday": 1
    ],
  "value": 5.10
}
```

## Success Response

**Code** : `200 OK`

## Error Response

//

# Deactivate / delete an offer or a discount

**URL** : `https://api.fidelight.com/v1/company/discount/$discount.id`

**Method** : `DELETE`

**Auth required** : YES

## Request format

**Content example**

```json
{
  "total_delete": 0
}
```

## Success Response

**Code** : `200 OK`

## Error Response

//

# List all offers or discounts of a company

**URL** : `https://api.fidelight.com/v1/company/discount/$company.id`

**Method** : `GET`

**Auth required** : YES, as a user or a company

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "discounts": [
    {
      "id": 5896,
      "picture_link": "https://fidelight.com/pictures/discount_5315313515.jpg",
      "discount_type": 3,
      "cost": 250,
      "name": "-4€ on the tacos",
      "per_day": ["monday", "tuesday", "thursday"],
      "value": 5.1
    },
    {
      "id": 8955,
      "picture_link": "https://fidelight.com/pictures/discount_3155135135448.jpg",
      "discount_type": 2,
      "cost": 50,
      "name": "-50% on the tea",
      "value": 25
    }
  ]
}
```

## Error Response

//

# Get details about a discount or an offer

**URL** : `https://api.fidelight.com/v1/company/discount/$discount.id`

**Method** : `GET`

**Auth required** : YES, as a user or a company

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "id": 5896,
  "company": 9,
  "discount_type": 3,
  "picture_link": "https://fidelight.com/pictures/discount_5315313515.jpg",
  "name": "-4€ on the tacos",
  "description": "Pay your kebab 3 euros instead of 7 in your Perfect Coffee shop !",
  "product": "Kebab",
  "cost": 250,
  "nb_max": null,
  "start_date": null,
  "expiration_date": null,
  "per_day": ["monday", "tuesday", "thursday"],
  "value": 5.1
}
```

## Error Response

//

# Use an offer on a user

**URL** : `https://api.fidelight.com/v1/company/discount/use/$user.id`

**Method** : `GET`

**Auth required** : YES

## Request Format

**Content example**

```json
{
  "qr_key": "aLFO1AlBdL",
  "company": 3,
  "discount": 164
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "transaction": 56464
}
```

## Error Response

//

#!/bin/bash

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/sign-up"

curl ${API}${URL_PATH} \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PW}"'",
    "password_confirmation": "'"${PW}"'"
    }
  }'

echo
echo

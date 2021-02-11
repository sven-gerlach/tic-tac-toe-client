#!/bin/bash

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/change-password"

curl ${API}${URL_PATH} \
  --include \
  --request PATCH \
  --header "Content-type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
  "passwords": {
    "old": "'"${OLDPW}"'",
    "new": "'"${NEWPW}"'"
    }
  }'

echo
echo

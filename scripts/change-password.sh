#!/bin/bash

#curl "http://localhost:3000/change-password/${ID}" \
curl --include --request PATCH http://localhost:3000/change-password/5 \
  --header "Authorization: Token token=BAhJIiU1YTExNGUzNTEzYjBkNWU2YzYxOTU4NGZiM2ZjM2Y1ZAY6BkVG--c89d5d0306781ab23065b73a650f9eed6745585d" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "123",
      "new": "321"
    }
  }'

echo

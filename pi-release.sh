#!/bin/bash

PI="tobnobs@raspberrypi.local"

# Install dependencies and build
echo "Installing dependencies and building..."
bun install
bun --bun run build

# scp build to pi
echo "Deploying to tobnobs.com..."
scp -r dist/* "$PI":~/tobnobs.com

if [ $? -eq 0 ]; then
  echo "Successfully copied to tobnobs.com"

  # ssh into pi and move files to server
  echo "Moving files to server..."
  ssh "$PI" << EOF
    sudo cp -r ~/tobnobs.com/* /var/www/tobnobs.com
    sudo chown -R www-data:www-data /var/www/tobnobs.com
EOF
else
  echo "Failed to deploy to tobnobs.com"
fi

exit 0
```

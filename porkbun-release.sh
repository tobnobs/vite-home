#!/bin/bash

source .env

# FTP Configuration
FTP_HOST="pixie-ftp.porkbun.com"
FTP_USER="tobnobs.com"
echo
REMOTE_DIR="."
LOCAL_DIR="./dist"

echo "Uploading files to porkbun"
lftp -e "mirror -R $LOCAL_DIR $REMOTE_DIR; bye" -u "$FTP_USER","$FTP_PASSWORD" ftp://"$FTP_HOST"
echo "DONE"

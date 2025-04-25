#!/bin/bash

source .env

# FTP Configuration
FTP_HOST="pixie-ftp.porkbun.com"
FTP_USER="tobnobs.com"
echo
REMOTE_DIR="."
BASE_LOCAL_DIR="./dist"

# Check if an argument was provided
if [ -z "$1" ]; then
  echo "Error: Please provide a folder name as an argument"
  echo "Usage: $0 <folder_name>"
  exit 1
fi

FOLDER_NAME="$1"
LOCAL_DIR="$BASE_LOCAL_DIR/$FOLDER_NAME"

# Check if the specified folder exists
if [ ! -d "$LOCAL_DIR" ]; then
  echo "Error: Directory $LOCAL_DIR does not exist"
  exit 1
fi

echo "Uploading files to porkbun"
lftp -e "mirror -R $LOCAL_DIR $REMOTE_DIR/$FOLDER_NAME; bye" -u "$FTP_USER","$FTP_PASSWORD" ftp://"$FTP_HOST"
echo "DONE"

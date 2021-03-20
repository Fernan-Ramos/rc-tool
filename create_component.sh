#!/bin/bash
CURRENT_PATH=`PWD`
echo "${CURRENT_PATH}"
mkdir -p ./$1
touch ./$1/styles.jsx
NODE_MODULES_PATH=`npm root -g`
sed -e "s/COMPONENT_NAME/$1/g" "${NODE_MODULES_PATH}/react-cli/code_templates/component.jsx" > ./$1/index.jsx
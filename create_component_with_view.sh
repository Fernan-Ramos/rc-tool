mkdir -p src/components/$1
touch src/components/$1/styles.jsx
sed -e "s/COMPONENT_NAME/View/g" code_templates/component.jsx > src/components/$1/view.jsx
sed -e "s/COMPONENT_NAME/$1/g" code_templates/component.jsx > src/components/$1/index.jsx
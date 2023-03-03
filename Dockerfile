#################################################################################
#Fecha de Creación:  2023-01-25
#Autor: Juan Pablo Zapata Suste [jzapata@blucapital.mx]
#Actualizaciones: 
#Versión: 1.0
#################################################################################
FROM node

# definir ruta de la app
WORKDIR /app

# copiar achivos package y package-lock
COPY package*.json ./

# instalar dependencias
RUN npm install

# copiar código fuente
COPY . .

# exponer app en un puerto
EXPOSE 4000

# ejecutar el proyecto
CMD [ "npm", "start" ]
# Usa la imagen oficial de Node.js como base
FROM node:latest AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu aplicación al directorio de trabajo del contenedor
COPY package*.json .
RUN npm install

COPY . .

# Instala las dependencias del proyecto
RUN npm run build

# Define una segunda etapa de construcción para mantener la imagen lo más pequeña posible
FROM nginx:alpine

# Copia los archivos estáticos generados durante la construcción a la ubicación predeterminada de Nginx
COPY --from=builder /app/dist/ /app/dist/

# Exponer el puerto 80 para que pueda ser accesible desde el exterior
EXPOSE 8080

CMD ["npm", "run", "preview"]

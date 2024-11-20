# Базовий образ
FROM nginx:alpine

# Копіюємо production build до nginx
COPY build /usr/share/nginx/html

# Експонуємо порт 80
EXPOSE 80

# Запускаємо nginx
CMD ["nginx", "-g", "daemon off;"]

# Dockerfile
FROM node:20-alpine

# สร้าง working directory
WORKDIR /app

# คัดลอก package.json และ lock
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอก source code ทั้งหมด
COPY . .

# สร้าง environment variable ที่ใช้ runtime
ENV NODE_ENV=production

# เปิดพอร์ตที่ใช้ในแอป
EXPOSE 4000

# รันแอป
CMD ["node", "src/index.js"]
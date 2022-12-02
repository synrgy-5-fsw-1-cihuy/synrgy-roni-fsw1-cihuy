# Binar Challenge Chapter 6

Khoironi Kurnia Syah - Fullstack Web Development 1 (A) - Chapter 6

- Preview : [Open](https://binarc6.zekhoi.dev/docs)

## Diagram

![diagram](./submission/diagram.png)

## API Docs

You can see the API documentation at

- Swagger UI : [https://binarc6.zekhoi.dev/docs](https://binarc6.zekhoi.dev/docs)

# Notes

Ada 2 hal tidak saya buat di submission ini, yaitu :

- migrations
- seeders

Saya mau membiasakan memakai typescript jadi mohon maaf jika ada yang kurang sesuai. Saya tidak membuat migrations dan seeders karena di typescript kurang banyak referensi dan banyak error untuk sequelize menggunakan sequelize-cli, jadi tidak saya buat. Tetapi sebenarnya saya sudah memahami fungsi dan manfaat kedua hal tersebut, tapi pasti saya akan buat di project nanti menggunakan js biasa sesuai fungsi dan manfaatnya.

## Users

| Email                | Password | Role       |
| -------------------- | -------- | ---------- |
| johndoe@email.com    | password | member     |
| johndoel@email.com   | password | admin      |
| johndoeloe@email.com | password | superadmin |

## Authentication

Try out login with example user (superadmin)
![Login](./submission/login.png)

Masukan accessToken pada form Authorize
![Auth](./submission/auth.png)

import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // Bc 1 : Lấy ra đường dẫn của file cần đọc
    const filePath = path.join(process.cwd(), "database", "users.json");

    // Bc 2 : Sử dụng fs để đoc file
    const data = fs.readFileSync(filePath, "utf8");

    // Bc 3 : Ép kiểu từ JSON sang js
    const users = JSON.parse(data);

    // Trả về dữ liệu cho phía client
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const userRequest = await request.json();
    console.log(userRequest);

    // Bc 1 : LẤy dữu liệu từ phía client
    const user = {
      id: 1,
      name: "Chinh",
    };

    // Bc 2 : Lấy ra đường dẫn của file cần ghi
    const filePath = path.join(process.cwd(), "database", "users.json");

    // Chuyển đổi dữ liệu thành json
    const data = JSON.stringify(user);

    // Đọc file cần ghi vào
    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // Push dữ liệu vào trong mảng
    users.push(user);

    // Bc 3 : Ghi file
    fs.writeFileSync(filePath, JSON.stringify(users), "utf-8");

    return NextResponse.json({ message: "Ghi file thành công" });
  } catch (error) {
    return NextResponse.json({ message: "Ghi file thất bại" });
  }
}

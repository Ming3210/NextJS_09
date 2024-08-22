import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type ParamTypes = {
  params: {
    id: number;
  };
};

type User = {
  id: number;
  name: string;
};

export async function PUT(request: NextRequest, { params }: ParamTypes) {
  const { id } = params;

  // Bc 1 : Láy vị trí file cần đọc
  const filePath = path.join(process.cwd(), "database", "users.json");
  const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

  // Bc 2 : Tìm kiếm vị trí cần cập nhật
  const findIndex = users.findIndex((user: User) => user.id === +params.id);

  // Bc 3 : Ghi đè lại file
  if (findIndex !== -1) {
    users[findIndex].name = "Lien";
  }
  fs.writeFileSync(filePath, JSON.stringify(users), "utf-8");

  // Bc 4 : Trả về message cho client

  return NextResponse.json({ message: "Cập nhật thành công" });
}

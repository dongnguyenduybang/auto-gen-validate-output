import { CreateUserDTO } from "src/auto_gen/dtos/create-user.dto";
import { UserRole } from "src/auto_gen/dtos/enums/user-role.enum";

export interface UserDataResponse {
    // userId: string,
    // token: string,
    username: string,
    birthday: Date,
    age: number,
    isActive: boolean,
    isObject: object,
    tags: string[],
    role: UserRole
}

export interface SuccessResponse {
    ok: true;
    data: UserDataResponse[];
  }

export interface FailResponse {
    ok: false;
    data: null;
    error: { [key: string]: any };
}
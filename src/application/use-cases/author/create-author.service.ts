import { Injectable } from "@nestjs/common";
import { CreateAuthorDto } from "./dto/create-author.dto";

@Injectable()
export class CreateAuthorService {
    async execute(request: CreateAuthorDto) {
        
    }
}
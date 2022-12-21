import { Injectable } from "@nestjs/common";
import { UpdateAuthorDto } from "./dto/update-author.dto";

@Injectable()
export class UpdateAuthorService {
    async execute(id: string, request: UpdateAuthorDto) {
        
    }
}
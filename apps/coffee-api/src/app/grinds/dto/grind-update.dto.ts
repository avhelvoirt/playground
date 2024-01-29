import {PartialType} from "@nestjs/mapped-types";
import {GrindCreateDto} from "./grind-create.dto";

export class GrindUpdateDto extends PartialType(GrindCreateDto){
  //by default all values of grindCreateDto will be optional.
}

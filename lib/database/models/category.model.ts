import { Document } from "mongodb";
import { model, models, Schema } from "mongoose";

export interface ICantegory extends Document {
     _id: String;
     name: String
}

const categorySchema = new Schema({
     name: { type: String, required: true, unique: true}
})

const category = models.category || model('category', categorySchema)
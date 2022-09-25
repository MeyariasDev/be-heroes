import { Schema } from 'mongoose';

export const viewSchema = new Schema({
  nombreView: String,
  viewHtmlString: String,
});

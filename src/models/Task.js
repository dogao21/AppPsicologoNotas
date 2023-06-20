import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// taskSchema es el objeto que estamos definiendo entre la linea 3 y 24, el primer parametro "tAsKs" es el nombre que tomara
//la base de datos en mongodb, ignora mayusculas y minusculas, aunque este como "tAsKs" terminara como "tasks"
export default model("tAsKs", taskSchema);

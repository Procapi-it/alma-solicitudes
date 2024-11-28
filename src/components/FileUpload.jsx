
import { BotonUpload } from "./botonupload";

export const FileUpload = ({ register, persona }) => {
    const handleFileChange1 = async event => {
        const file = event.target.files[0];
        const text = await uploadAndConvertFile(file);
        register("file1", { value: text });
    };

    const handleFileChange2 = async event => {
        const file = event.target.files[0];
        const text = await uploadAndConvertFile(file);
        register("file2", { value: text });
    };

  return (
    <section>
      <div>
        <label htmlFor="file" className="block mb-2" required>
          Adjuntar Cédula o Pasaporte
          <span className="text-red-500">*</span>:
        </label>
        <BotonUpload handleFileChange={handleFileChange1} required />
      </div>
      {persona === "juridica" && (
        <div>
          <label htmlFor="file" required className="block mb-2">
            Adjuntar aviso de operaciones
            <span className="text-red-500">*</span>:
          </label>
          <BotonUpload handleFileChange={handleFileChange2} required />
        </div>
      )}
    </section>
  );
};



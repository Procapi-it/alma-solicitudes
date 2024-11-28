import { useState } from "react";
import { BotonUpload } from "./botonupload";
import { uploadAndConvertFile } from "../global/config";

export const FileUpload = ({ register, persona }) => {
    const [file1URL, setFile1URL] = useState("");
    const [file2URL, setFile2URL] = useState("");
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange1 = async (event) => {
        const file = event.target.files[0];
        setIsUploading(true);
        const downloadURL = await uploadAndConvertFile(file);
        setIsUploading(false);
        if (downloadURL) {
            setFile1URL(downloadURL);
            register("file1", { value: downloadURL });
        }
    };

    const handleFileChange2 = async (event) => {
        const file = event.target.files[0];
        setIsUploading(true);
        const downloadURL = await uploadAndConvertFile(file);
        setIsUploading(false);
        if (downloadURL) {
            setFile2URL(downloadURL);
            register("file2", { value: downloadURL });
        }
    };

    return (
        <section>
            <div>
                <label htmlFor="file1" className="block mb-2" required>
                    Adjuntar Cédula o Pasaporte
                    <span className="text-red-500">*</span>:
                </label>
                <BotonUpload handleFileChange={handleFileChange1} required />
                {isUploading && <p className="mt-2 text-sm text-blue-600">Subiendo archivo...</p>}
                {file1URL && <p className="mt-2 text-sm text-green-600">Archivo subido exitosamente</p>}
            </div>
            {persona === "juridica" && (
                <div className="mt-4">
                    <label htmlFor="file2" required className="block mb-2">
                        Adjuntar aviso de operaciones
                        <span className="text-red-500">*</span>:
                    </label>
                    <BotonUpload handleFileChange={handleFileChange2} required />
                    {isUploading && <p className="mt-2 text-sm text-blue-600">Subiendo archivo...</p>}
                    {file2URL && <p className="mt-2 text-sm text-green-600">Archivo subido exitosamente</p>}
                </div>
            )}
        </section>
    );
};


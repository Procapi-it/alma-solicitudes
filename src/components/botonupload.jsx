import PropTypes from "prop-types";

function BotonUpload({ handleFileChange }) {
    return (
        <div className="my-2 px-3">
            <input
                type="file"
                name=""
                id=""
                className="drop-zone lg:w-96 md:w-32 h-100 font-quicksand text-16 rounded-5 flex cursor-pointer flex-col items-center justify-center border-4 border-dashed border-secondary p-4 text-center font-medium text-gray-400"
                onChange={handleFileChange}
            />
        </div>
    );
}

export { BotonUpload };
BotonUpload.propTypes = {
    handleFileChange: PropTypes.func
};

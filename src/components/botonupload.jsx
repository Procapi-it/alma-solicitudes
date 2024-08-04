import PropTypes from "prop-types";

function BotonUpload({ handleFileChange }) {
    return (
        <div className="mx-auto">
            <input
                type="file"
                name=""
                id=""
                className="drop-zone lg:w-96 w-80 mx-auto h-100 font-quicksand text-16 rounded-5 flex cursor-pointer flex-col items-center justify-center border-4 border-dashed border-secondary p-4 text-center font-medium text-gray-400"
                onChange={handleFileChange}
            />
        </div>
    );
}

export { BotonUpload };
BotonUpload.propTypes = {
    handleFileChange: PropTypes.func
};

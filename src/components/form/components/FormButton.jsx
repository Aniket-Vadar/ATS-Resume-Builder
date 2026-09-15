import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

const FormButton = ({ size, remove, add }) => {
  return (
    <div className="flex items-center gap-2 mt-2">
      <button
        type="button"
        onClick={add}
        aria-label="Add"
        className="btn-action-add"
      >
        <MdAddCircle className="text-sm" />
        <span>Add item</span>
      </button>
      {size > 0 && (
        <button
          type="button"
          onClick={remove}
          aria-label="Remove"
          className="btn-action-del"
          title="Remove last item"
        >
          <MdRemoveCircle className="text-sm" />
        </button>
      )}
    </div>
  );
};

export default FormButton;

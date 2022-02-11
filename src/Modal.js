import { createPortal } from "react-dom";

export default function Modal(props) {
  const node = document.getElementById("modal");
  if (props.open) {
    return createPortal(
      <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-center">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center">
              <div className="mt-2">{props.children}</div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => props.setOpen(false)}
          >
            Cacher
          </button>
        </div>
      </div>,
      node
    );
  } else {
    return createPortal(<div></div>, node);
  }
}

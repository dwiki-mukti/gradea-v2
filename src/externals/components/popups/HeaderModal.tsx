import { XMarkIcon } from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction } from "react";

type MyHeaderModalProps = {
  title?: string;
  toHide: Dispatch<SetStateAction<any | ((prev: any) => void)>>;
};

export default function HeaderModal({ title, toHide }: MyHeaderModalProps) {
  return (
    <div className="card-header">
      <div className="card-title">{title}</div>
      <div
        className="cursor-pointer"
        onClick={() => {
          toHide(null);
        }}
      >
        <XMarkIcon className="text-lg hover:text-gray-500" />
      </div>
    </div>
  );
}

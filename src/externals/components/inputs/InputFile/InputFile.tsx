import { useEffect, useRef, useState } from "react";
// import CropImage from './CropImage';
import {
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { typeInputProps } from "../Input";
// import { changeAttributeInput } from '@/externals/utils/frontend';

export default function InputFile({
  stateHandler,
  noLabel,
  // aspectRatio = 0,
  isCleanup,

  disabled,
  readOnly,
  className,
  onChange,
  required,
  accept,
  label,
  // type,
  name,
  id,

  ...props
}: Omit<
  typeInputProps,
  "validations" | "options" | "path" | "onSearch" | "noSearch" | "noUnset"
>) {
  const refInput = useRef<HTMLInputElement>(null);

  const [getter, setter] = stateHandler ?? useState<typeStateInput>({});
  // const [ShowModal, setShowModal] = useState(false);

  useEffect(() => {
    if (getter?.values?.[name] instanceof File && refInput.current) {
      const container = new DataTransfer();
      container.items.add(getter.values[name]);
      refInput.current.files = container.files;
    }
  }, [getter?.values?.[name]]);

  useEffect(() => {
    if (
      required &&
      refInput.current &&
      !refInput.current.files?.length &&
      !getter?.invalids?.[name]?.length
    ) {
      setter((prev: typeStateInput) => ({
        ...(prev ?? {}),
        uncompleteds: [
          ...(prev?.uncompleteds ?? []).filter(
            (uncompleted) => uncompleted != name,
          ),
          name,
        ],
      }));
    }
  }, [refInput?.current]);

  useEffect(
    () => () => {
      if (isCleanup) {
        setter((prev) => {
          const result = { ...prev };
          delete result?.invalids?.[name];
          delete result?.labels?.[name];
          delete result?.values?.[name];
          result.uncompleteds = (result.uncompleteds ?? []).filter(
            (res) => res != name,
          );
          return result;
        });
      }
    },

    [],
  );

  return (
    <>
      <div
        className={`input-group ${getter?.invalids?.[name]?.length ? "input-group-invalid" : ""}`}
      >
        {!noLabel && (
          <div
            className="label-input-form"
            // onClick={() => (
            //     (type == 'imageCrop') ? setShowModal(true) : refInput?.current?.click()
            // )}
          >
            {label ?? name}
          </div>
        )}
        <div>
          <input
            ref={refInput}
            type="file"
            name={name}
            id={id ?? name}
            onChange={(e) => {
              const blobFile = e.target.files?.[0];

              setter((prev: typeStateInput) => {
                const invalids: string[] = [];
                if (!blobFile && required) {
                  invalids.push("Field tidak boleh kosong!");
                }

                if (accept && blobFile) {
                  const rule = accept
                    .replaceAll(" ", "")
                    .replaceAll(",", "|")
                    .replaceAll("/*", "[/*]");
                  const extName = blobFile.name.split(".").pop() ?? "";
                  if (
                    !(
                      new RegExp(rule).test(blobFile.type) ||
                      new RegExp(rule).test(`.${extName}`)
                    )
                  ) {
                    invalids.push(`File harus bertipe ${accept}`);
                  }
                }

                return {
                  ...(prev ?? {}),
                  values: { ...(prev?.values ?? {}), [name]: blobFile },
                  invalids: { ...(prev?.invalids ?? {}), [name]: invalids },
                  uncompleteds: (prev?.uncompleteds ?? []).filter(
                    (uncompleted) => uncompleted != name,
                  ),
                };
              });
              if (onChange) onChange(e);
            }}
            style={{ display: "none" }}
            accept={accept}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            {...props}
          />
          {!getter?.values?.[name] ? (
            <div
              // onClick={() => {
              //     if (!(disabled || readOnly)) {
              //         (type == 'imageCrop') ? setShowModal(true) : refInput?.current?.click()
              //     }
              // }}
              className={`input-form flex items-center gap-1 ${!(disabled || readOnly) ? "cursor-pointer" : ""} ${className}`}
            >
              <ArrowUpTrayIcon className="text-xl" />
              <div>Pilih file</div>
            </div>
          ) : (
            <div className={`input-form flex items-center ${className}`}>
              <div className="flex items-center gap-1">
                <a
                  className="rounded-full hover:bg-primary/10 hover:text-primary h-7 aspect-square flex items-center justify-center"
                  target="_blank"
                  rel="noreferrer"
                  href={
                    getter?.values?.[name] instanceof File
                      ? URL.createObjectURL(getter?.values?.[name])
                      : getter?.values?.[name]
                  }
                >
                  <ArrowDownTrayIcon />
                </a>
                <div className="truncate block max-w-[12rem]">
                  {getter?.values?.[name]?.name ?? getter?.values?.[name]}
                </div>
              </div>
              {!(disabled || readOnly) && (
                <div
                  className={`ml-auto cursor-pointer`}
                  onClick={() => {
                    if (refInput.current) {
                      const valueSetter = Object.getOwnPropertyDescriptor(
                        window.HTMLInputElement.prototype,
                        "value",
                      )?.set;
                      valueSetter?.call(refInput.current, null);
                      const eventTrigger = new Event("change", {
                        bubbles: true,
                      });
                      refInput.current.dispatchEvent(eventTrigger);
                    }
                  }}
                >
                  <div className="rotate-45 rounded-full hover:text-red-500">
                    <PlusCircleIcon />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {Boolean(getter?.invalids?.[name]?.length) && (
          <div className="invalid-message">{getter?.invalids?.[name][0]}</div>
        )}
      </div>
      {/* {(type == 'imageCrop') && (
                <CropImage
                    show={ShowModal}
                    onSelect={(fileCropped) => {
                        let container = new DataTransfer();
                        container.items.add(fileCropped);
                        changeAttributeInput(refInput.current, 'files', container.files)
                        setShowModal(false)
                    }}
                    onCancel={() => setShowModal(false)}
                    defaultValue={getter?.values?.[name]}
                    aspectRatio={aspectRatio}
                />
            )} */}
    </>
  );
}
